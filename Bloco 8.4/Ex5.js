/* Reescrevendo funções utilizando TDD
5. Agora mudamos um pouco: temos uma função pronta (e feita de forma errada, ou seja, sem funcionar direito), os parâmetros 
que devem ser passados a ela e a resposta esperada. Escreva testes de modo a entender e testar o comportamento da função e, 
depois, altere a mesma para que passe nos testes. Use os casos de teste acima como inspiração se tiver dúvidas! */

const greetPeople = (people) => {
    let greeting = [];
  
    for (const person in people) {
      greeting[person] = `Hello, ${people[person]}`;
    }
    return greeting;
  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello, Irina', 'Hello, Ashleigh', 'Hello, Elsa'];
  /*
    Use a variável parameter como parâmetro da função acima, escreva testes para verificar
    se a mesma está retornando a como se vê na variável result e, caso não esteja, altere
    o código para que ele passe nos testes. Lembre-se: testes pequenos e numerosos! Escreva
    um por vez e vá corrigindo a função aos poucos:
  */

const assert = require('assert');

const saiDaFuncao = greetPeople(parameter);
assert.strictEqual(typeof greetPeople, 'function');
assert.deepEqual(saiDaFuncao, result);