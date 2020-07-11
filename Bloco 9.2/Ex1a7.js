const assert = require('assert');
// Exercícios abaixo...
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Requisitos para os testes

const expected_result_1 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]

const expected_result_3 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu'
]

const expected_result_5 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

const expected_result_6 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft'
];

const expected_result_7 = [
  {
    age: 31,
    author: 'Isaac Asimov'
  },
  {
    age: 38,
    author: 'H. P. Lovecraft'
  },
  {
    age: 39,
    author: 'Stephen King'
  },
  {
    age: 43,
    author: 'George R. R. Martin'
  },
  {
    age: 45,
    author: 'Frank Herbert'
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien'
  }
];

// 1. Crie um array ordenado com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
  const livrosFCF = books.filter(livro => livro.genre == 'Ficção Científica' || livro.genre == 'Fantasia');
  const listaAutores = livrosFCF.map(livro => livro.author.name);
  const autoresOrdenados = listaAutores.sort();
  return autoresOrdenados;
}
// console.log(fantasyOrScienceFictionAuthors());
assert.deepEqual(fantasyOrScienceFictionAuthors(), expected_result_1);

// 2. Crie uma string com os nomes de todas as pessoas autoras.
function allNames() {
  const arrayAutores = books.map(livro => livro.author.name);
  const objecToArray = (acumulador, autor) => (autor == 'H. P. Lovecraft') ? acumulador + autor + '.' : acumulador + autor + ', ';
  const stringAutores = arrayAutores.reduce(objecToArray, 'Nomes: ');
  return stringAutores;
  }
//console.log(allNames());
assert.deepEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");

// 3. Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks() {
  const sessentoes = books.filter(livro => livro.releaseYear <= 1960);
  const stringLegados = sessentoes.map(livro => livro.name);
  return stringLegados;
}
//console.log(oldBooks());
assert.deepEqual(oldBooks(), expected_result_3);

// 4. Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expected_result = 43;
function averageAge() {
  const somatoria = (acc, ano) => acc + ano;
  const anosNasc = books.map(livro => livro.author.birthYear).reduce(somatoria);
  const anosLanc = books.map(livro => livro.releaseYear).reduce(somatoria);
  return (anosLanc - anosNasc) / 6;
}
//console.log(averageAge());
assert.equal(averageAge(), expected_result);

// 5. Encontre o livro com o maior nome.
function longestNamedBook() {
  const achaMaior = (titulos) => {
    let maior = 0;
    for (let y in titulos)
      if (titulos[y].length > maior)
        maior = titulos[y].length;
    return maior;
  }
  const taMaior = achaMaior(books.map(livro => livro.name));
  return books.find(livro => livro.name.length == taMaior);
}
//console.log(longestNamedBook());
assert.deepEqual(longestNamedBook(), expected_result_5);

// 6. Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
function formatedBookNames() {
  const gigArray = books.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`);
  return gigArray;
}
//console.log(formatedBookNames());
assert.deepEqual(formatedBookNames(), expected_result_6);

// 7. Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado. Dica: use as funções map, sort
function nameAndAge() {
  const autoresEIdades = books.map(livro => {
    const conteiner = {};
    conteiner['age'] = livro.releaseYear - livro.author.birthYear;
    conteiner['author'] = livro.author.name;
    return conteiner;
  })
  return autoresEIdades.sort(function(a,b){return a.age - b.age});
}

console.log(nameAndAge(books));
assert.deepEqual(nameAndAge(), expected_result_7);