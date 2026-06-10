# App Aluno React

Projeto desenvolvido para a disciplina de Front-end do Centro Universitário SATC.

## Descrição

Este projeto consiste na portabilidade da aplicação App Aluno, originalmente desenvolvida em HTML, CSS e JavaScript puro, para React utilizando Vite.

A aplicação implementa conceitos fundamentais do React, incluindo:

* Componentização
* Props
* Hooks (useState e useEffect)
* Formulários controlados
* React Router
* Context API
* Consumo de API com fetch
* Responsividade para desktop e mobile

## Funcionalidades

### Autenticação

* Login
* Recuperação de senha
* Nova senha
* Cadastro de usuário

### Área Interna

* Dashboard
* Disciplinas
* Perfil
* TutorIA

### Consumo de API

A aplicação realiza integração com a API pública do GitHub para exibição de informações do usuário, demonstrando o uso de:

* fetch()
* async/await
* try/catch/finally
* Tratamento de loading
* Tratamento de erros

## Tecnologias Utilizadas

* React
* Vite
* React Router DOM
* JavaScript
* CSS3

## Estrutura do Projeto

```text
src/
├── components/
├── pages/
├── context/
├── services/
├── App.jsx
├── main.jsx
└── index.css
```

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd app-aluno-react
```

Instale as dependências:

```bash
npm install
```

## Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Após iniciar, acesse:

```text
http://localhost:8080
```

## Integrantes

* Eduardo Moraes
* Pedro Venicio Vassoler

## Professor

Lucas Beskow Vergara

## Disciplina

Front-end – Engenharia de Software

Centro Universitário SATC
