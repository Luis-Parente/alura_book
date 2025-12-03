import exibirLivrosNaTela from "./exibir_livros_na_tela.js";
import getBuscarLivrosDaAPI from "./buscar_livros.js";
import aplicarDescontoLivro from "./aplicar_desconto.js";
import filtrarLivrosPorCategoria from "./filtrar_livros.js";

const elementoParaInserirLivros = document.getElementById('livros');
const botoes = document.querySelectorAll('.btn');

let livros = await getBuscarLivrosDaAPI();

let livrosComDesconto = aplicarDescontoLivro(livros)

exibirLivrosNaTela(livrosComDesconto, elementoParaInserirLivros);

botoes.forEach(btn => {
    btn.addEventListener('click', (e) => {
        elementoParaInserirLivros.innerHTML = ""
        let livrosFiltrados = filtrarLivrosPorCategoria(livros, btn.value);
        exibirLivrosNaTela(livrosFiltrados, elementoParaInserirLivros);
    })
})