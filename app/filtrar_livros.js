export function filtrarLivrosPorCategoria(livros, categoria) {
    if (categoria === "disponivel") {
        return livros.filter(livro => {
            return livro.quantidade > 0;
        })
    } else if (categoria === "preco") {
        return livros.sort((a, b) => a.preco - b.preco);
    } else {
        return livros.filter(livro => {
            return livro.categoria === categoria;
        })
    }
}

export default filtrarLivrosPorCategoria;