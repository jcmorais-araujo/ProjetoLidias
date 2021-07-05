const roupas = require('./database');
//console.log(roupas);

//Pegar o Input

const readline = require('readline-sync');
const entradaInicial = readline.question('Deseja pesquisar uma roupa? (S/N)');

//Se a pessoa responder sim, mostrar as categorias disponíveis e perguntar qual categoria ela escolhe.

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis: ')
    console.log('| Vestido |', '| Macacão |', '| Calça |', '| Blusa |', '| Short |',
        '| Macaquito |', '| Saia |', '| Tênis |')



    const entradaDaCategoria = readline.question('Qual a categora do seu interesse?')

    const retorno = roupas.filter(roupa => roupa.tipo === entradaDaCategoria)
    console.table(retorno)
} else {
    console.table(roupas)
}

//Se não, mostrar todos os livros em ordem crescente pela quantidade de páginas