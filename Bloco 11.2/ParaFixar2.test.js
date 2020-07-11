// Utilize as funções do arquivo ‘math.js’ para realizar os exercícios:
const math = require('./math');
jest.mock('./math');

// 1. Faça o mock da funcão subtrair e teste sua chamada.
test("Subtrair", () => {
    math.subtrair.mockReturnValue(9);
    math.subtrair(99, 90);
    expect(math.subtrair).toHaveBeenCalled();

    // Aqui testamos se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
    //expect(math.subtrair).toHaveBeenCalledTimes(1);
    //expect(math.subtrair).toHaveBeenCalledWith(99, 90);
    //expect(math.subtrair(99, 90)).toBe(9);
});

// 2. Faça o mock da função multiplicar e implemente como retorno padrão o valor ‘10’. Teste a chamada e o retorno.
test("Multiplicar", () => {
    math.multiplicar.mockReturnValue(10);
    math.multiplicar(5, 2);
    expect(math.multiplicar).toHaveBeenCalledWith(5, 2);
    expect(math.multiplicar(5, 2)).toBe(10);
});

// 3. Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
test("#Somar", () => {
    math.somar.mockImplementation((a, b) => a + b);
    math.somar(99, 99);
    expect(math.somar).toHaveBeenCalledWith(99, 99);
    expect(math.somar(99, 99)).toBe(198);
});

// 4. Faça o mock da função dividir e implemente um retorno padrão com o valor ‘15’. Implemente também os seguintes valores para a primeira e segunda chamadas: ‘2’ e ‘5’. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
test("#Dividir", () => {
    math.dividir.mockReturnValue(15);

    math.dividir(30, 2);
    expect(math.dividir).toHaveBeenCalledTimes(1);
    expect(math.dividir).toHaveBeenCalledWith(30, 2);
    expect(math.dividir(30, 2)).toBe(15);
    expect(math.dividir).toHaveBeenCalledTimes(2);

    math.dividir(75, 5);
    expect(math.dividir).toHaveBeenCalledTimes(3);
    expect(math.dividir).toHaveBeenCalledWith(75, 5);
    expect(math.dividir(75, 5)).toBe(15);
});

// 5. Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor ‘20’. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.

test("Subtrair c/ mock", () => {
    expect(math.subtrair(55, 10)).toBe(45);

    const mockSub = jest.spyOn(math, "subtrair")
        .mockImplementation((a, b) => a / b)
        .mockReturnValue(20);
    
    math.subtrair(100, 5);
    expect(mockSub).toHaveBeenCalledTimes(2); // Uma vez no ítem 1!!
    expect(mockSub(100, 5)).toBe(20);
    expect(mockSub).toHaveBeenCalledTimes(3);
    expect(mockSub).toHaveBeenCalledWith(100, 5);

    math.subtrair.mockRestore();
    expect(math.subtrair(55, 10)).toBe(45);
});
