const SecondaryMemory = require('./SecondaryMemory')
const MainMemory = require('./MainMemory')

// Perceba que o script do nosso Sistema Operacional faz duas coisas: primeiro carrega os valores do array `randomNumbers` para a devida memória utilizando o método `load` de cada classe, então, ele roda um laço de repetição, pelo `length` do array, buscando cada valor na memória utilizando o método `get` de cada uma. Por fim, ele imprime no console o tempo e o valor da soma dos números para cada loop, ou seja, o resultado da operação com cada tipo de memória.

const secondaryMemory = new SecondaryMemory()
const mainMemory = new MainMemory()

// Conjunto de números aleatórios a serem somados
let randomNumbers = [];

for (let i = 0; i < 100; i++) {
  randomNumbers.push((Math.random() * 1000).toFixed(0));
}

console.log('Números gerados: ', randomNumbers)

// Carregando todos os números em memória (principal e secundária)
randomNumbers.forEach((number) => {
  secondaryMemory.load(number)
  mainMemory.load(number)
});

// Iterando sobre os números carregados na MEMORIA PRINCIPAL e realizando a soma
let initialMainMemoryTime = Date.now()
let mainMemorySum = 0
for (let i = 0; i < randomNumbers.length; i++) {
  mainMemorySum += mainMemory.get(i)
}
console.log(`Memória Principal\nSoma: ${mainMemorySum} Tempo gasto: ${Date.now() - initialMainMemoryTime}ms\n`)

// Iterando sobre os números carregados na MEMORIA SECUNDARIA e realizando a soma
let initialSecondaryMemoryTime = Date.now()
let secondaryMemorySum = 0
for (let i = 0; i < randomNumbers.length; i++) {
  secondaryMemorySum += secondaryMemory.get(i)
}
console.log(`Memória Secundária\nSoma: ${secondaryMemorySum} Tempo gasto: ${Date.now() - initialSecondaryMemoryTime}ms`)

// Perceba que o script do nosso Sistema Operacional faz duas coisas: primeiro carrega os valores do array `randomNumbers` para a devida memória utilizando o método `load` de cada classe, então, ele roda um laço de repetição, pelo `length` do array, buscando cada valor na memória utilizando o método `get` de cada uma. Por fim, ele imprime no console o tempo e o valor da soma dos números para cada loop, ou seja, o resultado da operação com cada tipo de memória.