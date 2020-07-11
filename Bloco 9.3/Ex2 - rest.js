// 2. Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
const assert = require('assert')

// escreva sum abaixo
const sum = (...parametros) => {
    let somatoria = 0;
    for (let i of parametros)
        somatoria += i;
    return somatoria;
}


assert.equal(sum(), 0)
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
    
