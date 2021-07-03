// Exerc�cio 1: Utilize uma combina��o das express�es aritm�ticas e adicione um campo chamado idade � cole��o clientes. Algumas dicas:

//  arredonde para baixo o valor da idade;
//  calcule a idade usando a diferen�a entre a data corrente e a data de nascimento;
//  1 dia � igual a 86400000 milissegundos.

db.clientes.aggregate([
  {
    $addFields: {
      idade: {
        $divide: [
          { $subtract: ["$$NOW", "$dataNascimento"]}, 86400000 * 365]
      }
    }
  },
  {
    $project: { nome: 1, IdaDerredondada: { $floor: "$idade"} }
  },
  // Exerc�cio 2: Utilizando o novo campo idade, conte quantos clientes t�m entre 18 e 25 anos. Dica: sua agrega��o deve retornar 75.
  { $match: { IdaDerredondada: { $gte: 18, $lte: 25 } } },
  { $count: 'IdaDerredondada' },
  
  // Exerc�cio 3: Remova o est�gio $count do exerc�cio anterior e adicione um est�gio no pipeline que coloque as compras do cliente no campo compras.
  {
    $lookup: {
      from: 'vendas',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'compras'
    }
  }
])
// Exerc�cio 4: Selecione TODOS os clientes que compraram entre Junho de 2019 e Mar�o de 2020.

// Exerc�cio 5: Confira o n�mero de documentos retornados pelo pipeline com o m�todo itcount(). At� aqui voc� deve ter 486 documentos sendo retornados.

// Exerc�cio 6: Deixe apenas os top 10 clientes com mais compras nesse per�odo.

// Exerc�cio 7: Para esses clientes, adicione um campo chamado compras.valorComDesconto em todas as compras do per�odo, aplicando 10% de desconto sobre o valor total da compra (valorTotal).

// Exerc�cio 8: Ainda nesse pipeline, descubra os 5 estados com mais compras.

// Exerc�cio 9: Descubra o cliente que mais consumiu QUEIJO PRATO. Retorne um documento com a seguinte estrutura:

// {
//   "nomeCliente": "NOME",
//   "uf": "UF DO CLIENTE",
//   "totalConsumido": 100
// }

// Exerc�cio 10: Selecione todas as vendas do m�s de Mar�o de 2020, com status EM SEPARACAO. Acrescente um campo chamado dataEntregaPrevista com valor igual a tr�s dias ap�s a data da venda. Retorne apenas os campos clienteId, dataVenda e dataEntregaPrevista.
// Bonus

// Exerc�cio 11: Calcule a diferen�a absoluta em dias entre a data da primeira entrega prevista e a �ltima, considerando o pipeline do exerc�cio 10.