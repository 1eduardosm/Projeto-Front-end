export async function aiResponse() {
    const id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    )

    if (!response.ok) {
        throw new Error(
            `Erro ao gerar resposta`
        )
    }

    return response.json()

}