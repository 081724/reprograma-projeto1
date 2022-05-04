const livros = require('../database')
const read = require('readline-sync')

const listarLivrosEmOrdem = () => {
 
  const opcaoInicial = read.question('Deseja buscar livros em ordem? S/N ').toUpperCase()

  if (opcaoInicial === 'S') {
    
    const ordenar = livros.sort((a,b) => a.paginas - b.paginas)
    console.table(ordenar)
  }
}

module.exports = listarLivrosEmOrdem

