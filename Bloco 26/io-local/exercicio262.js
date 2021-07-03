// Exercício 1: Crie uma função que retorna uma promise:

// Essa função deve receber 3 parâmetros, fazendo o tratamento de erro caso algum dos parâmetros não seja um número.
// Caso algum dos parâmetros não seja do tipo Number rejeite a promise e imprima na tela a frase "Digite apenas números".
// Caso todos os parâmetros sejam do tipo Number você deve somar os dois primeiros.
// Depois pegue o resultado da soma e multiplique pelo terceiro parâmetro e caso seja menor que 50, rejeite a promise com a mensagem "Valor muito baixo".
// Caso contrário, aceite a promise imprimindo o resultado da multiplicação na tela.
const rls = require("readline-sync");

const decrypt = (n1, n2, n3) => {(n1 + n2) * n3};

async function numberMixer () {
  return new Promise((resolve, reject) => {
    const n1 = rls.question('Primeiro numero: ');
    const n2 = rls.question('Segundo numero: ');
    const n3 = rls.question('Terceiro numero: ');
    if (isNaN(n1 + n2 + n3)) return reject(new Error('Digite apenas números'));
    resolve(decrypt(n1, n2, n3));
  }).then((resultado) => {
    if (resultado < 50)
      return Promise.reject(new Error('Valor muito baixo'));
    Promise.resolve(console.log(resultado));
  })
}

numberMixer();

async function mathOperations(x, y, z) { 
  return new Promise((resolve, reject) => {
    if ( typeof x !== 'number' || typeof y !== 'number' || typeof z !== 'number') {
      return reject(new Error('Digite apenas números')) }
    resolve(x + y);
  }).then((r) => {
    if (r*z < 50) { return Promise.reject(new Error('Valor muito baixo')); }
    return r*z;
  })
}

// mathOperations(5,7,9);
