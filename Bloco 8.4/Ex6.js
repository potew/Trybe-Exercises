const removeVowels = (word) => {
    const characters = word.split('');
    const results = [];
  
    for (let i = 0, j = 1; i < characters.length; i += 1) {
      if (
        characters[i] === 'a' ||
        characters[i] === 'o' ||
        characters[i] === 'i' ||
        characters[i] === 'e' ||
        characters[i] === 'u'
      ) {
        results.push(j);
        j++;
      } else {
        results.push(word[i]);
      }
    }
    return results.join('');
  };
  
  const parameter = 'Dayane';
  const result = 'D1y2n3';
  /*
    Use a variável parameter como parâmetro da função acima, escreva testes para verificar
    se a mesma está retornando a como se vê na variável result e, caso não esteja, altere
    o código para que ele passe nos testes. Lembre-se: testes pequenos e numerosos! Escreva
    um por vez e vá corrigindo a função aos poucos:
  */

const assert = require('assert');

const saiDaFuncao = removeVowels(parameter);
assert.strictEqual(typeof removeVowels, 'function');
assert.strictEqual(saiDaFuncao, result);