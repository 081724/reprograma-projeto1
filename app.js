const read = require('readline-sync') // trazendo pra o projeto o poder de pegar input no terminal
const buscarLivros = require('./controllers/buscarLivros') //trazendo pra o app as informacoes que estao no arquivo buscarLivros
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')
const listarLivrosEmOrdem = require('./controllers/listarLivrosOrdenados')
const listarLivrosRecomendados = require('./controllers/listarRecomendados')

const resposta = read.question(`
====================== Menu ========================

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de páginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos

5 - SAIR

Digite um número[1-5]: 
`)

//Quando a pessoa escolher a opção 1, eu quero que o js chame
// a funcão que vai estar no meu arquivo controllers/buscarLivros
switch (resposta) {
  case '1':
    //chamar a funcao buscarLivros
    buscarLivros()
    break
  case '2':
    listarLivrosEmOrdem()
    
    break
    case '3':
    listarLivrosRecomendados()
    
    break
    case '4':
   listarLivrosNaoLidos()
    
    break
  default:
    console.log('fim do algoritmo')
    break
}
