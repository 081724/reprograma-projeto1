const livros = require('../database')
const read = require('readline-sync')

const listarLivrosRecomendados = () => {
 
  const opcaoInicial = read.question('Deseja buscar livros recomendados? S/N ').toUpperCase()

  if (opcaoInicial === 'S') {
    
    const recomendados = livros.filter(livro => livro.recomenda === true)
    console.table(recomendados)
  }
}

module.exports = listarLivrosRecomendados

