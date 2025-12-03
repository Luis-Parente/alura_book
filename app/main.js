import exibirLivrosNaTela from "./exibir_livros_na_tela.js";
import getBuscarLivrosDaAPI from "./buscar_livros.js";
import aplicarDescontoLivro from "./aplicar_desconto.js";

let livros = await getBuscarLivrosDaAPI();

let livrosComDesconto = aplicarDescontoLivro(livros)

console.table(livros);
exibirLivrosNaTela(livrosComDesconto);