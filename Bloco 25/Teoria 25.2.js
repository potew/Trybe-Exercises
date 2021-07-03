// Expressão $add
db.sales.aggregate([
  { $project: { item: 1, total: { $add: ["$price", "$fee"] } } }
]); // Mostra o campo item mais a soma dos 2 campos acima

// Ex. 2: somando 120 dias nas datas de embarque para viagens a 2 cidades
// Podia ter sido feito direto ou criando esse campo. Podia até criar uma variável por fora
db.travels.aggregate([
  {
    $match: { package: { $in: ["Guarapari", "Caldas Novas"] }},
    $addFields: {
      new_start_date: { $add: ["$dates.start_date", 120 * 24 * 60 * 1000 ] },
      new_end_date: { $add: ["$dates.end_date", 120 * 24 * 60 * 1000 ] }
    },
    $project: {
      package: 1,
      dates: 1,
      new_start_date: 1,
      new_end_date: 1
    }
  }
])

// Expressão $subtract (com add em série)
db.sales.aggregate([
  {
    $project: {
      item: 1,
      total: {
        $subtract: [
          { $add: ["$price", "$fee"] },
          "$discount"
        ]
      }
    }
  }
]);

// Subtraindo da data atual (v4.2 and up)
db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
        $subtract: ["$$NOW", "$date"]
      }
    }
  }
]);

// Subtraíndo 5 minutos do campo date. Os tempos em mongo são dados em ms
db.sales.aggregate([
  {
    $project: {
      item: 1,
      dateDifference: {
      $subtract: ["$date", 5 * 60 * 1000]
      }
    }
  }
]);

// Expressão $ceil
// Expressão $floor - ver tb exercício 1
db.samples.aggregate([
  { $project: { value: 1, floorValue: { $floor: "$value" } } }
]);

// Expressão $abs
// Expressão $multiply

// Expressão $divide
// Estágio $addFields
// O $addFields é um estágio que adiciona novos campos aos documentos. A saída desse estágio conterá todos os campos existentes nos documentos de entrada e adicionará os novos campos especificados.

// Ex.1: O primeiro estágio adiciona o campo totalHomework somando os valores contidos no array homework. Também adiciona outro campo chamado totalQuiz somando os valores do array quiz.
// O segundo estágio adiciona o campo totalScore que, por sua vez, soma os valores dos campos totalHomework, totalQuiz e extraCredit.
db.scores.aggregate([
  {
    $addFields: {
      totalHomework: { $sum: "$homework" } ,
      totalQuiz: { $sum: "$quiz" }
    }
  },
  {
    $addFields: {
      totalScore: {
        $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ]
      }
    }
  }
]);


db.travels.aggregate([
  {
    $addFields: { totalPacote: { $add: ["$prices.package_price", "$prices.package_fee", "$prices.flight_price"] }},
    $addFields: { totalUSD: { $multiply: ["$totalPacote", 5.43] }}
  },
  {
    $project: {
      package: 1,
      dates: 1,
      totalPacote: 1,
      totalUSD: { $ceil: ["$totalUSD"]}
    }
  }
]).pretty();
