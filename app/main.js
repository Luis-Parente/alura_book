import exibirLivrosNaTela from "./exibir_livros_na_tela.js";
import getBuscarLivrosDaAPI from "./buscar_livros.js";
import aplicarDescontoLivro from "./aplicar_desconto.js";
import filtrarLivrosPorCategoria from "./filtrar_livros.js";
import calcularValorTotalLivros from "./calcular_valor_livros.js";

const elementoParaInserirLivros = document.getElementById('livros');
const elementoParaExibirValorTotalDosLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis');
const botoes = document.querySelectorAll('.btn');

let livros = await getBuscarLivrosDaAPI();

let livrosComDesconto = aplicarDescontoLivro(livros)

exibirLivrosNaTela(livrosComDesconto, elementoParaInserirLivros);

botoes.forEach(btn => {
    btn.addEventListener('click', (e) => {
        elementoParaExibirValorTotalDosLivrosDisponiveis.innerHTML = ""
        elementoParaInserirLivros.innerHTML = ""

        let livrosFiltrados = filtrarLivrosPorCategoria(livros, btn.value);

        if (btn.value === "disponivel") {
            let valorTotal = calcularValorTotalLivros(livrosFiltrados);
            elementoParaExibirValorTotalDosLivrosDisponiveis.innerHTML = `
                <div class="livros__disponiveis">
                    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
                </div>`
        }

        exibirLivrosNaTela(livrosFiltrados, elementoParaInserirLivros);
    })
})