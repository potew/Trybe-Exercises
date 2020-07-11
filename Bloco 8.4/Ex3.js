const assert = require('assert');
// 3. escreva a função addAllnumbers para passar nos testes abaixo:
const addAllnumbers = (numeros) => {
    let saida = 0;
    for (let i in numeros)
        saida += numeros[i];
    return saida;
}
//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);