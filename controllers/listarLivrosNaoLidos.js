const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
 
  const opcaoInicial = read.question('Deseja buscar por livros não lidos? S/N ').toUpperCase()

  if (opcaoInicial === 'S') {
    
    const naoLidos = livros.filter(livro => livro.leu===false)
    console.table(naoLidos)
  }
}

module.exports = listarLivrosNaoLidos

