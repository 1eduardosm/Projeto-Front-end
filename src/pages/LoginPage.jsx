import React from 'react'
import LoginForm from '../components/LoginForm'


const LoginPage = () => {
  return (
    <div>
        <div className="container">

        <div className="hero">
          <p>
            "Educação não é o aprendizado de fatos,
            mas treinamento da mente para pensar."
            <span>Albert Einstein</span>
          </p>
        </div>

        <div className="formulario">
          <div>

            <h1>Bem-vindo de volta</h1>
            <p>Por favor, insira suas credenciais para acessar seu painel acadêmico</p>

            <LoginForm />

            <p className="registre-se">Não tem uma conta? <a href="registro.html">Registre-se agora.</a></p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginPage