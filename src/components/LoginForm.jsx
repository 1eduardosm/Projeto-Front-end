import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import InputField from './InputField'
import '../assets/style.css'
import { useUsuario } from '../context/UsuarioContext'
import { buscarUsuario } from '../service/userService'

const LoginForm = () => {
    const [user, setUser] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const { setUsuario } = useUsuario()

    async function handleSubmit() {
        if (!user || !senha) return setErro('Preencha todos os Campos')

        try {
            setLoading(true)
            const dados = await buscarUsuario(user)
            if (dados) {
                setUsuario(dados)
                navigate('/dashboard')
            }
        } catch (e) {
            setErro(e.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <InputField
                label='Username'
                type='text'
                value={user}
                onChange={e => setUser(e.target.value)}
                placeholder='username'
                className={erro && !user ? 'erro' : ''}
            />

            <InputField
                label='Senha'
                type='password'
                value={senha}
                onChange={e => setSenha(e.target.value)}
                className={erro && !senha ? 'erro' : ''}
            >
                <Link to='/recovery'>Esqueceu?</Link>
            </InputField>

            {erro && <p style={{ textAlign: 'center', color: 'red' }}>{erro}</p>}
            <button onClick={() => handleSubmit()} style={{ cursor: 'pointer' }} disabled={loading}>Entrar</button>
        </div>
    )
}

export default LoginForm