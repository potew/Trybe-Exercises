// 10. Compare dois objetos (JSON) para verificar se são idênticos ou não

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Testes ex. 10', () => {
  test('Objeto 1 é igual a 2?', () => {
    expect(obj1).toStrictEqual(obj2);
  })

  test('Objeto 1 é igual a 3?', () => {
    expect(obj1).not.toStrictEqual(obj3);
  })
})

// 11. Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
function isAbove(num1, num2) {
  return num1 > num2;
}

describe('Testes ex. 11', () => {
  test('Primeiro parâmetro é maior que o segundo?', () => {
    expect(isAbove(99,91)).toEqual(true);
  })

  test('Primeiro parâmetro é maior que o segundo?', () => {
    expect(isAbove(99,999)).toEqual(false);
  })
})