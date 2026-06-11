import React, { useEffect, useState } from 'react'
import { buscarUsuario } from '../service/githubService'
import { useUsuario } from '../context/UsuarioContext';

const DashboardPage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const [erro, setErro] = useState('')

    const { usuario } = useUsuario()

    const [busca, setBusca] = useState(usuario);



    useEffect(() => {
        async function carregar() {
            try {
                const dados = await buscarUsuario(busca)
                setUser(dados)
            } catch (e) {
                setErro(e.message)
            } finally {
                setLoading(false)
            }
        }

        carregar()
    }, [busca])

    if (loading) return <p>Carregando dados...</p>
    if (erro) return <p>{erro}</p>

    return (
        <div style={{ display: 'flex' }}>
            <img width='200' src={user.avatar_url} />
            <h1>Olá, {user.name || user.login}!</h1>

        </div>
    )
}

export default DashboardPage
