// 7. Teste se uma variável foi definida
const thereIs = '';
test('Variável existe?', () => {
  expect(thereIs).toBeDefined();
})

// 8. Teste se uma função foi definida
function thereIsFunct() {}
test('Função existe?', () => {
  expect(thereIsFunct).toBeDefined();
})

// 9. Utilize assert.ok() para testar uma condição
function change(param) {
  return !param;
}

test('Inverte o valor', () => {
  expect(change(true)).toBeFalsy;
  expect(change(false)).toBe(true);
});

//const esperado = change(true);
//assert.ok(esperado === false);