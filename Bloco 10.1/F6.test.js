/* 6. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divísivel por 3 ou 5 e retorna false caso num não seja um número */

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

describe('Suíte de Testes fção FizzBuzz', () => {

  test('Teste 1', () => {
    expect(myFizzBuzz(45)).toEqual('fizzbuzz') })
  test('Teste 2', () => {
    expect(myFizzBuzz(33)).toEqual('fizz') })
  test('Teste 3', () => {
    expect(myFizzBuzz(55)).toEqual('buzz') })
  test('Teste 4', () => {
    expect(myFizzBuzz(113)).toEqual(113) })
  test('Teste 5', () => {
    expect(myFizzBuzz('algo')).toEqual(false) })
});