export function aplicarDescontoLivro(livros) {
    const desconto = 0.3;
    return livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)};
    })
}

export default aplicarDescontoLivro;