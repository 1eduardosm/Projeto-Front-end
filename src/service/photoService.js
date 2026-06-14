export async function buscarFoto(username) {
    const response = await fetch(
        `https://api.dicebear.com/9.x/initials/svg?seed=${username}`
    );

    if (!response.ok) {
        throw new Error(
            `Erro! foto não encontrada`
        )
    }
    return response.url
}