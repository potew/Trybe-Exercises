const assert = require('assert');

// 10. Compare dois objetos (JSON) para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepEqual(obj1,obj2);
assert.notDeepEqual(obj1,obj3);

// 11. Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
function isAbove(num1, num2) {
  return num1 > num2;
}

assert.equal(isAbove(99,91),true);