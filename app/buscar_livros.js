const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

export async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointAPI);
    return await res.json();
}

export default getBuscarLivrosDaAPI;