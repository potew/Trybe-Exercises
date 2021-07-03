// Express�o $add
db.sales.aggregate([
  { $project: { item: 1, total: { $add: ["$price", "$fee"] } } }
]); // Mostra o campo item mais a soma dos 2 campos acima

// Ex. 2: somando 120 dias nas datas de embarque para viagens a 2 cidades
// Podia ter sido feito direto ou criando esse campo. Podia at� criar uma vari�vel por fora
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

// Express�o $subtract (com add em s�rie)
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

// Subtra�ndo 5 minutos do campo date. Os tempos em mongo s�o dados em ms
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

// Express�o $ceil
// Express�o $floor - ver tb exerc�cio 1
db.samples.aggregate([
  { $project: { value: 1, floorValue: { $floor: "$value" } } }
]);

// Express�o $abs
// Express�o $multiply

// Express�o $divide
// Est�gio $addFields
// O $addFields � um est�gio que adiciona novos campos aos documentos. A sa�da desse est�gio conter� todos os campos existentes nos documentos de entrada e adicionar� os novos campos especificados.

// Ex.1: O primeiro est�gio adiciona o campo totalHomework somando os valores contidos no array homework. Tamb�m adiciona outro campo chamado totalQuiz somando os valores do array quiz.
// O segundo est�gio adiciona o campo totalScore que, por sua vez, soma os valores dos campos totalHomework, totalQuiz e extraCredit.
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
