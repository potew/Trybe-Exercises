const assert = require('assert');
// 2. escreva a função wordLengths para passar nos testes abaixo

const wordLengths = (words) => {
    const tamanhos = [0];
    for (let i in words)
        tamanhos[i] = words[i].length;
    return tamanhos;
}
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);