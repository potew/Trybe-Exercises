// Aggregation Framework
// O ideal é usar estes operadores na ordem para que o processo de filtragem seja mais eficiente. Exemplo: 
db.colecao.aggregate([{Match},{Group},{Sort},{Limit}])
// Ex.: match filtra os docs e depois group faz o agrupamento dos resultados
// Obs.: sempre tem colchetes, para representar o pipeline/funil

//  ***** MATCH simples ***** - valem os mesmos operadores do antigo FIND
db.articles.aggregate(
  [{ $match : { author : "dave" } }]
);

// $MATCH com operador OR
db.articles.aggregate(
  [
    {
      $match: {
      $or: [
            { score: { $gt: 70, $lt: 90 } },
            { views: { $gte: 1000 } }
        ]
      }
    }
  ]
);

// $LIMIT
db.articles.aggregate(
  { $limit : 5 }
);

// ***** $LOOKUP ***** - puxa dados de outras tabelas/coleções para a query. Equivale a um Left Join.
db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
]);

// Exemplo que junta todos os documentos da coleção orders com a coleção warehouse através do campo item se a quantidade em estoque (instock) é suficiente para cobrir a quantidade vendida (ordered). Os documentos que dão match são colocados no campo stockdata.

db.orders.aggregate([
  {
    $lookup: {
      from: "warehouses",
      let: { order_item: "$item", order_qty: "$ordered" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: [ "$stock_item",  "$$order_item" ] },
                { $gte: [ "$instock", "$$order_qty" ] }
              ]
            }
          }
        },
        { $project: { stock_item: 0, _id: 0 } }
      ],
      as: "stockdata"
    }
  }
]);

// Note que, dentro do estágio pipeline, temos um operador $match que utiliza uma expressão ($expr). Essa, por sua vez, utiliza o operador $and. Dentro do $and, são utilizados operadores de igualdade ($eq) e de comparação ($gte). O símbolo $ também é utilizado para se referir aos campos da coleção warehouse (a coleção de junção), enquanto $$ se refere às variáveis definidas no estágio let (os campos da coleção orders). Os campos _id e stock_item da coleção de join (warehouse) são excluídos com o uso do opeador $project.

// ***** $GROUP ***** - realiza a agregação

// Estes são os sub-operadores mais comuns
// $addToSet: Retorna um array com os valores únicos da expressão para cada grupo;
// $avg: Retorna a média de valores numéricos. Valores não numéricos são ignorados;
// $first: Retorna um valor do primeiro documento de cada grupo;
// $last: Retorna um valor do último documento de cada grupo;
// $max: Retorna o maior valor de cada grupo;
// $sum: Retorna a soma de valores numéricos. Valores não numéricos são ignorados.

// Ex.: conta número de documentos
db.sales.aggregate([
  {
    $group: {
      _id: null,    // conta todos os docs
      count: { $sum: 1 }
    }
  }
]);

// Ex. 2: conta valores distintos de um campo (no caso item)
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      count: { $sum: 1 }
    }
  }
]);

// Ex. 3: soma valores multiplicados previamente
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);

// Ex. 4: Equivalente ao Having do SQL
// Pode-se acrescentar um segundo estágio à query acima, por exemplo, para saber os valores > 100
db.sales.aggregate([
  {
    $group : {
      _id : "$item",
      totalSaleAmount: {
        $sum: {
          $multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  {
    $match: { "totalSaleAmount": { $gte: 100 } }
  }
]);

// Ex. 5: Agrupando por null
db.sales.aggregate([
  {
    $group: {
      _id: null,
      totalSaleAmount: {
        $sum: { $multiply: ["$price", "$quantity"] }
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 }
    }
  }
]);
// (Retorna um documento com o valor total da venda, a quantidade média de itens vendidos e o total de vendas)

//  ***** UNWIND ***** - Quebra atributos em documentos diferentes
{ _id: 7, item: "ABC1", sizes: ["S", "M", "L"] };
// Trasforma isso ^
db.inventory.aggregate([{ $unwind : "$sizes" }]);
//           Nisso v
{ "_id" : 7, "item" : "ABC1", "sizes" : "S" }
{ "_id" : 7, "item" : "ABC1", "sizes" : "M" }
{ "_id" : 7, "item" : "ABC1", "sizes" : "L" }

// ***** PROJECT *****
// Faz aquele filtro final de mostrar somente os campos selecionados
db.books.aggregate(
  [
    {
      $project : {
        title : 1,
        author : 1
      }
    }
  ]
);

// Ex. 2: Ocultando o campo ID:
db.books.aggregate([
  {
    $project : {
      _id: 0,
      title : 1,
      author : 1
    }
  }
]);

// Ex. 3: Ocultando apenas um campo e exibindo os demais
db.books.aggregate([
  {
    $project : {
      copies: 0
    }
  }
]);

// Ex. 4: veja o exercício 7 desta aula. Bem mais comple(x)to