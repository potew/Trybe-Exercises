const assert = require('assert');

// 7. Teste se uma variável foi definida
const thereIs = '';
assert.equal(typeof thereIs, 'string');

// 8. Teste se uma função foi definida

function thereIsFunct() {}
assert.strictEqual(typeof thereIsFunct, 'function');

// 9. Utilize assert.ok() para testar uma condição

function change(param) {
  return !param;
}

const esperado = change(true);
assert.ok(esperado === false);