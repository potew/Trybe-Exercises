// O código a seguir simula uma chamada ao banco de dados para buscar usuários. O resultado dessa busca é uma Promise, que é utilizada pelo método getUserName.
const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
    };
    
const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
        return resolve(users[id]);
        }
        return reject({ erro: 'User with id ' + id + ' not found.' });
    });
}
    
const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
}

// 2. Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

describe('Testes questione 2 - promises', () => {
    test('Usuário encontrado?', () => {
        expect.assertions(1); // Opcional
        return expect(getUserName(4)).resolves.toBe('Mark');
    });
    test('Usuário inexistente?', () => {
        return expect(getUserName(3)).rejects.toEqual(
            { erro: 'User with id 3 not found.' });
    });
});

// 3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

describe('Testes questione 3 - async/await', () => {
    test('Usuário encontrado?', async () => {
        const nomeRetornado = await findUserById(4);
            expect(nomeRetornado.name).toEqual('Mark');
    });
    test('Usuário inexistente?', async () => {
        try {
            await findUserById(3);
        }   catch(erro) {
            expect(erro).toEqual({ erro: 'User with id 3 not found.' });
        }
    });
});
