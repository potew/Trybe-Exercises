// Para testar uma promise será usado código abaixo, ele possui um array myAnimals, contendo animais com seu nome, idade e tipo.
// Observe que a função findAnimalsByType é uma promise, responsável por realizar uma busca no pelo os animais de determinado tipo no array, caso ela de certo retornar um resolve com um array de dados, caso de errado, retornará um reject com um objeto com a chave error que possui uma mensagem de erro.

const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalsByType = (type) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const arrayAnimals = Animals.filter((animal) => animal.type === type);
        if (arrayAnimals.length !== 0) {
          return resolve(arrayAnimals);
        }
  
        return reject({ error: 'Não há esse tipo de animal.' });
      }, 100);
    })
  );
  
  const getListAnimals = (type) => (
    findAnimalsByType(type).then(list => list)
  );

// O primeiro teste desde código verificará se, ao chamar a função getListAnimals com Dog como parâmetro, o seu retorno será os dois cachorros do array Animals.

describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      expect.assertions(2); //²
      return getListAnimals('Dog').then(listDogs => {
        expect(listDogs[0].name).toEqual('Dorminhoco');
        expect(listDogs[1].name).toEqual('Soneca');
      });
    });
});

// Rode o teste, verifique se ele não está dando algum falso-positivo. Mude o Dorminhoco para Agitado. Viu? O teste não passou, logo não possui falso-positivos. 
//(²) Sem essa linha e o return da seguinte, o teste retorna um falso-positivo. Ela serve para indicar o número de verificações a serem feitas e pode ser usada em qualquer caso (promises, await etc).

// Essa promise possui dois casos: quando ela funciona, ocorre o resolve e, no erro, ocorre o reject. Como o resolve já foi testado, faltam apenas os testes do erro.

describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      return getListAnimals('Lion').catch(error =>
        expect(error).toEqual({ error: "Não há esse tipo de animal." })
      );
    });
});

// Como o array Animals não possui nenhum Lion (tipo inserido no teste), será disparada a reject, que retornará um objeto com uma chave error com o valor Não possui esse tipo de animal.. A diferença entre esse teste e os outros é o .catch no lugar do .then. O .catch trabalha o resultado da promise quando ela ocorre um reject, já o .then, quando ocorre o resolve.
