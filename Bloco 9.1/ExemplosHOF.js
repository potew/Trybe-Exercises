// Exemplos de High Order Functions. 
// Toda HOF recebe uma outra função como parâmetro, inicialmente seriam elementos de arrays
//É comum problemas serem resolvidos com diferentes HOFs. Não existe necessariamente uma específica para cada caso, tente achar a que se encaixe melhor em cada caso.

// Array.find
const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbers.find(numero => numero % 5 === 0);

console.log(firstMultipleOf5);




// Array.forEach - aplica uma função sobre todos os elementos de um array, modificando-o;
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} x 2 = ${element * 2}`);
};
numbers2.forEach(multipliesFor2);






// Array.find (outra forma de usar)
const numbers3 = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const findEven = numbers3.find(verifyEven);

console.log(findEven); // 30
console.log(`9 é par? ${verifyEven(9)}`); // False
console.log(`E 14, é par? ${verifyEven(14)}`); // True

// Outra forma ainda mais enxuta
const findEven2 = numbers3.find((number) => number % 2 === 0);
console.log(`Primeiro número par da lista: ${findEven2}`); // 30








// Array.filter
const numbers4 = [4, 8, 15, 16, 23, 42];
const verifyEven2 = (number) => number % 2 === 0;
const filterEven = numbers4.filter(verifyEven2);

console.log(`Números pares da outra lista: ${filterEven}`); // [ 4, 8, 16, 42 ]









// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const filterEven2 = numbers4.filter((number) => number % 2 === 0);

console.log(`Números pares da lista acima obtidos de outra forma: ${filterEven2}`); // [ 4, 8, 16, 42 ]

const objPeople = [
    { name: 'José', age: 21 },
    { name: 'Lucas', age: 19 },
    { name: 'Maria', age: 16 },
    { name: 'Gilberto', age: 18 },
    { name: 'Vitor', age: 15 },
  ];

  const verifyAgeDrive = (arrayOfPeople) => (
    arrayOfPeople.filter((person) => (person.age < 18))
  );
  
  console.log(verifyAgeDrive(objPeople)); 










// Outra utilidade do filtro: excluir registros
const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) => {
  return listStudents.filter((student) => student !== name); // Filtra todos os estudantes que não tem o nome 'Ricardo' e retorna um array com eles. Na prática, ou seja, remove o Ricardo do array.
};

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(`Nova lista de estudantes: ${newListStudents}`); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]










// Array.some
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);
};

console.log(`A inicial J aparece pelo menos uma vez em [${listNames}]? ${verifyFirstLetter('J', listNames)}`); // true
console.log(`A inicial X aparece pelo menos uma vez em [${listNames}]? ${verifyFirstLetter('X', listNames)}`); // false









// Array.every
const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => {
  return Object.values(studentGrades).every((grade) => grade === 'Aprovado');
};

console.log(`O aluno passou em tudo? ${verifyGrades(grades)}`);











// Array.sort
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);  // [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

// Com números agora, pois é diferente de texto
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); // [1, 5, 10, 25, 40, 100]









// Array.map - aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;
// Exemplo 1 - junta nomes e sobrenomes contidos num objeto em uma só string do array
const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

// Array.map - Exemplo 2: transforma todos os elementos em negativo usando map ao invés de FOR
const numeros = [1, 2, 3, 4, -5];

const numerosNegativos = numeros.map(number => ((number > 0) ? number * (-1) : number));

console.log(numerosNegativos); // [ -1, -2, -3, -4, -5 ]
console.log(numeros); // [ 1, 2, 3, 4, -5 ]

// Array.map - Exemplo 3: ao contrário do 1, junta 2 arrays em objetos numa nova array
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => ({ [product]: listPrices[index] }));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts);

// Exemplo dihnâmico onde estudantes é um array (de objetos comeplexos) a ser procurado (um trecho dele abaixo como modelo)
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 }
    ]
  },  //[E vários outros objetos como este...]
]
const alunosDaManhã = estudantes.filter((estudante) => (estudante.turno === 'Manhã')).map((estudante)=>`${estudante.nome} ${estudante.sobrenome}`);
console.log(alunosDaManhã);

// Ex. 2: Mostra a situação de cada aluno resumidamente
const reportStatus = (name, students) => {
  const student = students.find((student) => student.nome === name);
  return student.materias.map((materia) => (
    `${materia.name}: ${(materia.nota >= 60) ? 'Aprovado' : 'Reprovado'}`
  ));
};

console.log(reportStatus('Jorge', estudantes));











// Array.reduce - possui um acumulador como o segundo parâmetro. O terceiro (opcional) se refere a um índice
// Exemplo 1 - soma tudo de um array
const numeros2 = [32, 15, 3, 2, -5, 56, 10];

const pegaSoma = (acumulador, elemento) => {
  console.log(`Soma com o elemento ${elemento}: ${elemento + acumulador}`); // 32 47 50 52 47 103
  return elemento + acumulador;
  };
const somaNumeros = numeros2.reduce(pegaSoma, 0);
// Este parâmetro 0 é opcional, e serve para inicializar o acumulador. Ele indica que o acc. vai iniciar com 0, mas podia ser em qualquer outro número
console.log(`Soma de toda a lista: ${somaNumeros}`); // 113

// Exemplo 2 - pega o maior número de um array
const numeros3 = [50, 85, -30, 3, 15];
// A variável 'maior' aqui é o nosso acumulador. O 'numero' é o elemento do array a ser iterado
const pegaMaior = (maior, numero) => (maior > numero) ? maior : numero;
const maior = numeros3.reduce(pegaMaior, 0);
console.log('Maior num. da lista:',maior); // 85

// Exemplo 3 - soma todos os números pares de um array - usa também filter
const numeros4 = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pegaPares = (numero) => numero % 2 === 0;
const somaPar = (valorAtual, numero) => valorAtual + numero;
const somaNúmeros = (array) => array.filter(pegaPares).reduce(somaPar); // Olhe que código pequeno e conciso!

console.log('Soma dos números da array:',somaNúmeros(numeros4)); // 152

// Exemplo 4 - mesma soma, usando só reduce
const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue);

const sumNumbers = (array) => array.reduce(sumPair);

console.log(sumNumbers(numeros4)); //152