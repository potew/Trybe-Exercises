// O exemplo abaixo gera um falso-positivo:
test("Não deveria passar!", () => {
    setTimeout(() => {
      expect(10).toBe(5);
      console.log('Deveria falhar!')
    }, 500);
  });
// Como o setTimeout é uma função assíncrona, o teste retorna um resultado falso-positivo quando executado dessa forma — note, inclusive, que a frase ‘Deveria falhar!’ sequer aparece no console. O Jest não espera o test acabar, gerando esse resultado falso-positivo. Para o Jest esperar a função assíncrona ser finalizada, é necessário utilizar uma callback própria da biblioteca chamada done, que precisa ser chamada após os testes assíncronos.

// Agora o Jest no exemplo c/ o DONE abaixo consegue identificar o erro. Obs.: done não é reservado, só é usado como referência.
test("Não deveria passar!", done => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
    done();
  }, 500);
});
