import { buscarFoto } from './photoService'

export async function buscarUsuario(username) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${username}`
    );

    const userResponse = await response.json()

    /* const user = users.find(user => user.username === username) */

    if (userResponse.length === 0) {
        throw new Error(
            `Erro! ${username} não encontrado`
        )
    }
    else {
        const photo = await buscarFoto(userResponse[0].name)
        const user = { ...userResponse[0], "photo": photo }
        return user
    }
}