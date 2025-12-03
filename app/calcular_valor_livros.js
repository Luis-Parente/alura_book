export function calcularValorTotalLivros(livros) {
    return livros.reduce((total, livro) => total + livro.preco, 0).toFixed(2)
}

export default calcularValorTotalLivros;