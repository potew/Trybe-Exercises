/* 5. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
    Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
    Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    Faça uma chamada para a função myRemoveWithoutCopy e verifique que o array passado por parâmetro sofreu alterações
    Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado   */

function myRemoveWithoutCopy(arr, item) {
    for (let i = 0, len = arr.length; i < len; i += 1) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i -= 1;
        len -= 1;
      }
    }
    return arr;
  }

describe('Suíte de Testes fção remove sem cópia', () => {

    test('Teste 1', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1,2,4]) })
    test('Teste 2', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1,2,3,4]) })
    test('Teste 3', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1,2,3,4]) })
});