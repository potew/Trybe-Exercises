// 6. Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor “request success”. O segundo deve interpretar que a requisição falhou e ter como valor “request failed”. Crie todos os testes que achar necessário.

const Exer6 = require('./Ex6');

describe ('Testes exercício 6', () => {
    const dogMockado = jest.spyOn(Exer6, 'requestDog');
    afterEach(dogMockado.mockReset);

    test('Chamada bem-sucedida', () => {
        dogMockado.mockResolvedValue('Request success');

        dogMockado();
        expect(dogMockado).toHaveBeenCalled();
        expect(dogMockado()).resolves.toBe('Request success');
        expect(dogMockado).toHaveBeenCalledTimes(2);
    });

    test('Chamada mal-sucedida', () => {
        dogMockado.mockRejectedValue('Request failed');
        expect(dogMockado).toHaveBeenCalledTimes(0);
        expect(dogMockado()).rejects.toMatch('Request failed');
        expect(dogMockado).toHaveBeenCalledTimes(1);
    });
})