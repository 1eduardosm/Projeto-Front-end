import React, { useEffect, useState } from 'react'
import { buscarUsuario } from '../service/userService'
import { useUsuario } from '../context/UsuarioContext';

const DashboardPage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState('')

    const { usuario } = useUsuario()


    useEffect(() => {
        async function carregar() {
            try {
                const dados = await buscarUsuario(usuario)
                setUser(dados)
            } catch (e) {
                setErro(e.message)
            } finally {
                setLoading(false)
            }
        }

        carregar()
    }, [usuario])

    if (loading) return <p>Carregando dados...</p>
    if (erro) return <p>{erro}</p>

    return (
        <div style={{ display: 'flex' }}>
            <img width='200' src={user.photo} />
            <h1>Olá, {user.name || user.username}!</h1>

        </div>
    )
}

export default DashboardPage
