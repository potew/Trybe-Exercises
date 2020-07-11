/* 3. A função mySum(arr) recebe um (arr)ay e retorna a soma de seus elementos

    Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
    Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado */

    function mySum(arr) {
      let result = 0;
      for (let item in arr) {
        result += arr[item];
      }
      return result;
    }
  
  module.exports = { mySum };

describe('Suíte de Testes fção soma array', () => {

  test('Teste 1', () => {
  expect(mySum([1, 2, 3, 4])).toBe(10) })
  test('Teste 2', () => {
    expect(mySum([1, -2, -3, 4])).toBe(0) })

});