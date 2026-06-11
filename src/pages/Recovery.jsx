import React from 'react'

const Recovery = () => {
    return (
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
                    <h1>Esqueci minha senha</h1>
                    <p>Informe seu e-mail para enviarmos o link para redefir sua senha.</p>

                    <form action="/login" method="post">
                        <label for="email">Endereço de e-mail</label>
                        <input name="email" id="email" type="text" placeholder="user@email.com" />

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Recovery
