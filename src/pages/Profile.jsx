import React, { useState, useContext, useEffect } from 'react'
import Header from '../components/Header'
import { useUsuario } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom'


const Profile = () => {

  const { usuario } = useUsuario()
  const navigate = useNavigate()

  useEffect(() => {
    if (!usuario) {
      navigate('/')
    }
  }, [])

  const dadosPessoais = [
    {
      label: 'Nome Completo',
      value: usuario?.name
    },
    {
      label: 'Username',
      value: usuario?.username
    },
    {
      label: 'Endereço de E-mail',
      value: usuario?.email
    },
    {
      label: 'Matrícula / CPF',
      value: usuario?.id
    },
    {
      label: 'Número de Telefone',
      value: usuario?.address.zipcode
    }
  ]

  return (
    <div className="content">
      <Header />

      <div className="content__container">
        <section className="profile">

          <div className="profile__header">
            <div className="profile__avatar">
              <img src={usuario?.photo} alt="Avatar" />
            </div>

            <div>
              <h2 className="profile__name">
                {usuario?.name}
              </h2>

              <p className="profile__course">
                Engenharia de Software • 3° Ano
              </p>
            </div>
          </div>

          <div className="profile__tabs">
            <button className="profile__tab profile__tab--active">
              Dados Pessoais
            </button>

            <button className="profile__tab">
              Configurações
            </button>

            <button className="profile__tab">
              Segurança
            </button>
          </div>

          <div className="profile__card">
            {dadosPessoais.map((item, index) => (
              <div className="profile__row" key={index}>
                <span className="profile__label">
                  {item.label}
                </span>

                <span className="profile__value">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

        </section>
      </div>
    </div>
  )
}

export default Profile