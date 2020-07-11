// 5. Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
    

// Após escrever o que imagina que será o resultado, execute os testes e veja se acertou.

/* 
O 1 é global e executa antes/depois de todos. O 2 só dentro de seu escopo
1- before
1- test
1- after
1- before
2- before
2- test
2- after
1- after
*/