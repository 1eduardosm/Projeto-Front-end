import React, { useEffect, useState } from 'react'
import { buscarUsuario } from '../service/userService'
import { useUsuario } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom'

const DashboardPage = () => {

    const navigate = useNavigate()
    const { usuario } = useUsuario()

    useEffect(() => {
        if (!usuario) {
            navigate('/')
        }
    }, [])

    return !usuario ? (<>Não foi possível encontrar os dados</>) : (
        <div style={{ display: 'flex' }}>
            <img width='200' src={usuario.photo} />
            <h1>Olá, {usuario.name || usuario.username}!</h1>
        </div>
    )
}

export default DashboardPage
