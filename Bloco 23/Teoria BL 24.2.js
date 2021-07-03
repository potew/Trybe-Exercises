// Operador ALL - pega o que tem os ítens especificados, independentemente da ordem. Substitui o AND
db.inventory.find(
  { tags: { $all: [ "ssl", "security" ] } }
  // Ao invés de 2 ands.
);

// Operador elemMatch - pega o que satisfaça a condição especificada
db.scores.find(
  { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
);

// Operador $size - seleciona documentos em que um array contenham um número de elementos especificado.
db.products.find(
  { tags: { $size: 2 } }
);

// Operador $expr - permite que você utilize expressões de agregação e construa queries que comparem campos no mesmo documento
db.monthlyBudget.find(
  { expr: { $gt: [ "$spent", "$budget" ] } }
  // Refina pelo que tenha gastos maiores que o orçamento
);

// Regex:
db.alumni.find({ register: { $regex: /789$/ } });
// terminados em 789

//  Operador $text - faz uma busca "textual" em um campo indexado por um text index. A expressão para utilizar o $text tem a seguinte sintaxe:

// {
//   $text:
//   {
//     $search: <string>,
//     $language: <string>,
//     $caseSensitive: <boolean>,
//     $diacriticSensitive: <boolean>
//   }
// }

// Obs.: é necessário que o campo-alvo esteja previamente indexado.
db.articles.createIndex({ subject: "text" }); // cria índice do tipo text(o) no campo subject

// $search: Uma string com os termos que o MongoDB utilizará para fazer o parse e utilizará como filtro. Internamente, o MongoDB faz uma busca lógica (OR) sobre os termos, a menos que seja especificado como uma frase inteira;
db.articles.find({ $text: { $search: "coffee" } }); // Procura por docs que tenham o texto coffee
db.articles.find({ $text: { $search: "bake coffee cake" } }); // Vários termos
db.articles.find({ $text: { $search: "\"coffee shop\"" } }); // Frases...

// $language: Opcional. Esse campo determina a lista de stop words que será utilizada na tokenização da busca. Veja a lista de idiomas suportados. Se você passar o valor none, a busca utilizará uma tokenização simples sem utilizar nenhuma lista de stop words;

// $caseSensitive: Opcional. Recebe um valor booleano para habilitar ou desabilitar buscas case sensitive. O valor default é false, o que faz com que as buscas sejam case-insensitive. Veja mais informações sobre case-insensitiveaqui;

// $diacriticSensitive: Opcional. Recebe um valor booleano para habilitar ou desabilitar busca diacritic sensitive. O valor default também é false.

// Operador mod - seleciona todos os documentos em que o valor do campo dividido por um divisor seja igual ao valor especificado (ou seja, executa a operação módulo).
db.inventory.find({ qty: { $mod: [4, 0] } });
// Doc cujo módulo da divisão de quantity por 4 seja zero kkkkkkkk