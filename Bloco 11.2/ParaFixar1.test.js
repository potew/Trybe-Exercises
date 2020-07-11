// Baseando-se nos códigos acima, defina uma função que retorna um número aleatório entre 1 e 100. A seguir, defina uma outra função que recebe um parâmetro e checa se o número aleatório é divisível pelo número do parâmetro. Assim:

function randomNumber() { return Math.floor(Math.random() * 101) }  // Lógica de gerar o número
// console.log(randomNumber());
const isDivisible = (number) => (randomNumber() % number) === 0

// 1. Feito isso, escreva um teste que verifica que a função randomNumber() é chamada quando invocamos a isDivisible()

test('Verifica se a fção é chamada', () => {
    randomNumber = jest.fn();
    isDivisible(5);
    expect(randomNumber).toBeCalled();
})

// 2. Teste que, quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true.

test('Verifica se retorna true com um número mockado par', () => {
    randomNumber = jest.fn().mockReturnValue(100);
    expect(isDivisible(2)).toBe(true);
    expect(randomNumber).toHaveBeenCalledTimes(1);
})

// 3. Simule (mocke) dois valores para a função randomNumber() retornar e um terceiro valor default. Chame a função isDivisible() quatro vezes num mesmo teste e cheque que os retornos são conforme esperado.

test('4 testes em 1', () => {
    randomNumber = jest.fn()
        .mockReturnValueOnce(30)
        .mockReturnValueOnce(25)
        .mockReturnValue(10);

    expect(isDivisible(15)).toBe(true);
    expect(isDivisible(7)).toBe(false);
    expect(isDivisible(3)).toBe(false);
    expect(isDivisible(5)).toBe(true);
    expect(randomNumber).toHaveBeenCalledTimes(4);
})

// Primeiro simula com o valor 30, depois com o 25 e daí em diante com o 10