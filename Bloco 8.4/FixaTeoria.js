// Começe a praticar TDD fazendo uma função que valida que um array de números não possui múltiplos de 3, 5, 7 e 11

const ntmdtcseo = (arraya) => {
    for (let i = 0 ; i < arraya.length ; i++)
        if (arraya[i] % 3 == 0 || arraya[i] % 5 == 0 || arraya[i] % 7 == 0 || arraya[i] % 11 == 0)
            return `${false}. ${arraya[i]} é murtiplo!!`;
        return true;
}

const assertiva = require('assert');
assertiva.deepEqual(ntmdtcseo([13,17,19,23,29,31,37,41]), true);
assertiva.notEqual(ntmdtcseo([123,117,149,223,219,331,387,441]), true);

// Agora, revivendo exercícios passados do curso, faça com TDD uma função que recebe um número natural n e retorna todos os números primos de 0 a esse número.