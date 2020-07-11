// 6. Nesse exercício, você irá criar funções parecidas com código abaixo - o mesmo que foi usado como exemplo sobre os testes de promise.

// (Código do Teoria4 - async/await)
// Use como base para os exercícios a seguir:

// 6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste abaixo.
// Dica, use o código usado como exemplo para criar uma nova função, analise os testes antes de iniciar.

const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (nome) => (
    new Promise((resolve, reject) => {
      const animalEncontrado = Animals.find(({name}) => name === nome);
      //const animalEncontrado = Animals.find(animal => animal.name === nome); tb funciona
      if (animalEncontrado) { return resolve(animalEncontrado); }
      return reject('Nenhum animal com esse nome!');
    })
  );

  /*
  const getAnimal = (name) => (
    findAnimalByName(name).then(nome => nome)
  );
  */
  //console.log(findAnimalByName('Soneca'));
    
describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return findAnimalByName('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByName('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

// 6.2 - Adicione uma nova funcionalidade para buscar pela a idade dos animais, o retorno deve ser um array de objetos, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const findAnimalByAge = (idade) => (
  new Promise((resolve, reject) => {
    const animaisEncontrados = Animals.filter(({age}) => age === idade);
    //const animaisEncontrados = Animals.filter(animal => animal.age === idade); tb funciona
    if (animaisEncontrados) { return resolve(animaisEncontrados); }
    return reject('Nenhum animal com essa idade!');
  })
);

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe animais com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return findAnimalByAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe animais com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(0);
      return findAnimalByAge(3).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});