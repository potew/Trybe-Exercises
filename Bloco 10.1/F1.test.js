/*
A função sum(a, b) retorna a soma do parâmetro a com o b

Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")*/


const soma = require('./F1')

describe('Suíte de Testes fção soma', () => {

  test('Soma 4 e 5 para dar 9', () => {
  expect(soma(4, 5)).toBe(9)
  })
  test('Soma de dois valores nulos', () => {
    expect(soma(0, 0)).toBe(0)
    })
  test('Soma de dois valores nulos', () => {
    expect(() => {soma(5, '5')}).toThrow()
    })
  test('Soma de dois valores nulos', () => {
    expect(() => {soma(5, '5')}).toThrowError('parameters must be numbers')
    })
});