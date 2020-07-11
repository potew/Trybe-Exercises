// 4. Dentro de um mesmo arquivo, crie três funções. 
// [...]
// Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const funcoes = require('./FuncEx45')
jest.mock('./FuncEx45');

test('Testes do exercício 4', () => {
    funcoes.fun1.mockImplementation(frase => frase.toLowerCase());
    funcoes.fun2.mockImplementation(frase => frase.charAt(frase.length - 1));
    funcoes.fun3.mockImplementation((f1, f2, f3) => f1 + f2 + f3);
    expect(funcoes.fun1('TesTeste')).toBe('testeste');
    expect(funcoes.fun2('abcdefghijklmnop')).toBe('p');
    expect(funcoes.fun3('Ae','io','u')).toBe('Aeiou');
});

// 5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.
describe('Testes exercício 5', () => {
    test('Função mockada', () => {
        const arapongagem = jest
            .spyOn(funcoes, 'fun1')
            .mockImplementation(frase => frase.toLowerCase());
        expect(arapongagem('TesTeste')).toBe('testeste');
    });
    test('Função restaurada', () => {
        funcoes.fun1.mockRestore();
        expect(funcoes.fun1('TesTeste')).toBe('TESTESTE');
    });
})