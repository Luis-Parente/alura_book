export function filtrarLivrosPorCategoria(livros, categoria) {
    return livros.filter(livro => {
        return livro.categoria === categoria;
    })
}

export default filtrarLivrosPorCategoria;