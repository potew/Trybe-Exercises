/* 4. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array

Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique que o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado   */

function remover(arr, item) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      if (item !== arr[i]) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

describe('Suíte de Testes fção remove do array', () => {

  test('Teste 1', () => {
  expect(remover([1, 2, 3, 4], 3)).toEqual([1,2,4])
  })
  test('Teste 2', () => {
    expect(remover([1, 2, 3, 4], 3)).not.toBe([1,2,3,4])
    })
  test('Teste 3', () => {
  expect(remover([1, 2, 3, 4], 5)).toEqual([1,2,3,4])
  })
});