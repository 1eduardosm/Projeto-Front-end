import React from 'react'
import Header from '../components/Header'

const Profile = () => {
  const dadosPessoais = [
    {
      label: 'Nome Completo',
      value: 'João Silva'
    },
    {
      label: 'Nome de Preferência',
      value: 'Jonh'
    },
    {
      label: 'Endereço de E-mail',
      value: 'joao.silva@satc.edu.br'
    },
    {
      label: 'Matrícula / CPF',
      value: '***.***.***-89'
    },
    {
      label: 'Número de Telefone',
      value: 'Não fornecido'
    }
  ]

  return (
    <div className="content">
      <Header />

      <div className="content__container">
        <section className="profile">

          <div className="profile__header">
            <div className="profile__avatar">
              JS
            </div>

            <div>
              <h2 className="profile__name">
                João Silva
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