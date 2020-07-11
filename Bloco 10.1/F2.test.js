/*A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr

Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado 
*/

const myIndexOf = (arr, item) => {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

describe('Suíte de Testes fção índice', () => {

  test('Teste 1', () => {
    expect(myIndexOf([1, 2, 3, 4], 3)).toBe(2) })
  test('Teste 2', () => {
    expect(myIndexOf([1, 2, 3, 4], 5)).toBe(-1) })
});