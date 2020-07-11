// 1. Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.
const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

// Onde fim é o mesmo que o DONE nos exemplos da teoria!!
test("Verifica maiúsculas", fim => {
    uppercase('TesTeste', (result) => {
        expect(result).toBe('TESTESTE');
        fim();
    })
});