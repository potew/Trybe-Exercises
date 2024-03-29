// Para filtrar os dados
// Operadores de comparação $lt, $lte, $gt, $gte, $eq, $ne, $in e $nin;
// Operadores lógicos $not e $nor;
// Filtros avançados com $and e $or;
// Operador $exists;
// { <campo>: { <operador>: <valor> } }
// Exemplo: db.coleção.find({ qty: { $lt: 10 } })
// Exemplo2: db.inventory.find({ qty: { $in: [ 5, 15 ] } })
// Exemplo 3 parrudão:
db.inventory.find({
    $and: [
        {
            $or: [
                { price : 0.99 },
                { price : 1.99 }
            ]
        },
        {
            $or: [
                { sale : true },
                { qty : { $lt : 20 } }
            ]
        }
    ]
})

// Exercício 1: Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.
{
    "_id" : ObjectId("5e4ed2b2866be74b5b26ebf1"),
    "name" : "Abin Sur",
    "alignment" : "good",
    "gender" : "Male",
    "race" : "Ungaran",
    "aspects" : {
        "eyeColor" : "blue",
        "hairColor" : "No Hair",
        "skinColor" : "red",
        "height" : 185,
        "weight" : 40.82
    },
    "publisher" : "DC Comics"
}

// Exercício 2: Selecione todos os super-heróis menores do que 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.
db.superheroes.find({ "aspects.height": { $lt: 180 } })

// Exercício 3: Retorne o total de super-heróis menores que 1.80m.
db.superheroes.count({ "aspects.height": { $lt: 180 } })

// Exercício 4: Retorne o total de super-heróis com até 1.80m.
db.superheroes.find({ "aspects.height": { $lte: 180 } })

// Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.
db.superheroes.findOne({ "aspects.height": { $gte: 200 } })

// Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
db.superheroes.count({ "aspects.height": { $gte: 200 } })

// Exercício 7: Selecione todos os super-heróis que têm olhos verdes.
db.superheroes.find({ "aspects.eyeColor": "green" })

// Exercício 8: Retorne o total de super-heróis com olhos azuis.
db.superheroes.count({ "aspects.eyeColor": "green" })

// Exercício 9: Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos ou carecas ("No Hair").
db.superheroes.find({ $or: [
    {"aspects.hairColor": "black"},
    {"aspects.hairColor": "No Hair"}
    ]
 })

// Exercício 10: Retorne o total de super-heróis com cabelos pretos ou carecas ("No Hair").
db.superheroes.count({ $or: [
    {"aspects.hairColor": "black"},
    {"aspects.hairColor": "No Hair"}
    ]
 })

// Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
db.superheroes.count({ $nor: [
    {"aspects.hairColor": "black"},
    {"aspects.hairColor": "No Hair"}
    ]
 })

// Exercício 12: Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.
db.superheroes.find({"aspects.height": { $not: { $gt: 180 } } }).pretty()

// Exercício 13: Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m.
db.superheroes.find({
  $and: [
      { race: { $ne: "Human" } },
      { "aspects.height": { $lt: 180 } }
      ]
    }).pretty()

// Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.
db.superheroes.find({
  $and: [
      { $or: [
            { "aspects.height": 180 },
            { "aspects.height": 200 }
            ]
        },
      { publisher: "DC Comics" }
      ]
    }).pretty()

// Exercício 15: Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou Mutantes, e não sejam publicados pela DC Comics.
db.superheroes.find({
  $and: [
        { "aspects.weight": { $in: [80, 100] }},
        { $or: [
            { race: "Human" },
            { race: "Mutant" }
            ]
        },
        { publisher: { $ne: "DC Comics" } }
      ]
        }).pretty()

// Exercício 16: Retorne o total de documentos que não contêm o campo race.
db.superheroes.count({ race: { $exists: false } })

// Exercício 17: Retorne o total de documentos que contêm o campo hairColor.
db.superheroes.count({ "aspects.hairColor": { $exists: true } })

// Exercício 18: Remova apenas um documento publicado pela Sony Pictures.
db.superheroes.deleteOne({ published: "Sony Pictures" })

// Exercício 19: Remova todos os documentos publicados pelo George Lucas.
db.superheroes.deleteMany({ published: "George Lucas" })