// Aula 24.2 - Comandos para adicionar atributos/valores em arrays

// PUSH - adiciona valor(es) ao array.
// Se o array não existir, ele cria um com os valores
db.students.updateOne(
  { _id: 1 },
  { $push: { scores: 89 } },
  { upsert: true }
);

// Modificadores
// $each: Adiciona múltiplos valores a um array;
// $slice: Limita o número de elementos do array.
// $sort: Ordena os elementos do array em ordem crescente (1) ou descrescente (-1)
// $position: Especifica a posição do elemento que está sendo inserido no array. Sem o modificador $position, o operador $push adiciona o elemento no final do array.

// PUSH >> Each
db.students.updateOne(
  { name: "joe" },
  {
    $push: {
      scores: { $each: [90, 92, 85] }
    }
  },
  { upsert: true }
);

// Exemplo 2 - PUSH >> Sort
db.students.updateOne(
  { name: "Jennifer" },
  {
    $push: {
      quizzes: {
        $each: [
                  { wk: 5, score: 8 },
                  { wk: 6, score: 7 },
                  { wk: 7, score: 6 }
                ],
        $sort: { score: -1 },
        $slice: 3
      }
    }
  }
);

// PULL - remove elementos que atendam à especificação
db.stores.updateMany(
  { },
  {
    $pull: {
      fruits: { $in: ["apples", "oranges"] },
      vegetables: "carrots"
    }
  }
);

// Ex. removendo o que é maior ou igual a que 6
db.profiles.updateOne(
  { _id: 1 },
  {
    $pull: {
      votes: { $gte: 6 }
    }
  }
);

// Ex. 2: removendo por um atributo, ele remove o doc. todo!
db.voos.updateOne(
  { vooId: 743218  },
  {
    $pull: {
      servicoDeBordo: { categoria: "comida", item: "carne", quantidade: 180 }
    }
  }
)

// Ex. 3: removendo o que satisfaça ambas as condições
db.survey.updateMany(
  { },
  {
    $pull: {
      results: { score: 8 , item: "B" }
    }
  }
);

// POP - remove o primeiro (-1) ou o último (1) elemento do array
db.students.updateOne(
  { _id: 1 },
  { $pop: { scores: -1 } }
);

// ADDTOSET - Adiciona um elemento considerando os demais como um conjunto (sem repetir)
db.inventory.update(
  { _id: 1 },
  { $addToSet: { tags: "accessories" } }
  // Só funcionará se o array (tem que ser array) não tiver um elemento accessories.
);

// ADDTOSET >> Each
db.inventory.updateOne(
  { _id: 2 },
  {
    addToSet: {
      tags: {
        $each: ["camera", "electronics", "accessories"]
      }
    }
  }
);
