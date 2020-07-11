// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função.

function randomNumber() { return Math.floor(Math.random() * 101); }

// 1. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
test("Teste exercício 1", () => {
    randomNumber = jest.fn().mockReturnValue(10);
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1)
});

// 2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const mathFunc = require('./math'); // Também funcionava se fizesse direto no arquivo, mas essa abordagem é mais condizente com a prática

test("Teste exercício 2", () => {
    mathFunc.randomizar = jest.fn().mockImplementationOnce((a, b) => (a / b)); // Só mockei uma vez, na primeira chamada
    expect(mathFunc.randomizar(10, 5)).toBe(2);
    expect(mathFunc.randomizar).toHaveBeenCalledTimes(1)
});

// 3. Ainda com a mesma função do primeiro exercício, utilizando o mock, cria uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova que recebe um parâmetro e retorne seu dobro. Faça os testes necessários.

jest.mock('./Math');
// jest.fn(randomNumber) também daria, fazendo as devidas adaptações
beforeEach(() => mathFunc.randomizar.mockReset());

test("Teste exercício 3, primeira implementação mockada", () => {
    mathFunc.randomizar.mockImplementationOnce((a, b, c) => (a * b * c));
    expect(mathFunc.randomizar(99, 99, 1)).toBe(9801);
    expect(mathFunc.randomizar).toHaveBeenCalledTimes(1)
});

test("Teste exercício 3, segunda implementação mockada", () => {
    mathFunc.randomizar.mockImplementationOnce((a) => (a * 2));
    expect(mathFunc.randomizar(99)).toBe(198);
    expect(mathFunc.randomizar).toHaveBeenCalledTimes(1)
});