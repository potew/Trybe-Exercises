const { ObjectId } = require('mongodb');
const connection = require("./connection");

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// Busca as 4 colunas abaixo de todos os autores cadastrados no banco. Se nenhum parâmetro fosse passado, tudo seria retornado!!
//  A query só é de fato executada quando execute é chamado. Ele retorna uma Promise que será resolvida para o resultado da query. Para consumir o resultado, usamos o método fetchAll, que retorna um array de arrays com os dados retornados do banco.

//Atualização bloco 28: removemos 8 linhas do código do bloco anterior (Mysql) e trocamos pelas linhas 26 a 28.
const getAll = async () =>
  connection()
  .then((db) => db.collection('authors').find().toArray())
  .then((authors) =>
    authors.map(({ _id, firstName, middleName, lastName }) =>
          getNewAuthor({
            id: _id,  // Isso tb foi alterado
            firstName,
            middleName,
            lastName,
          })
        )
    );

/**
 * Busca um autor específico, a partir do seu ID
 * @param {String} id ID do autor a ser recuperado
 */
const findById = async (id) => {
  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(ObjectId(id)));  // EraMais de 7 linhas aqui
  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData; // Era um array no mysqlx, lembra?

  return getNewAuthor({ id, firstName, middleName, lastName });
};

// Aqui usamos findOne(ObjectId(id)), uma sintaxe mais sucinta que podemos usar quando estamos filtrando documentos pelo campo _id. Também poderíamos usar a versão completa e mais verbosa: findOne({ _id: new ObjectId(id) }).

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
    // retorna um boolean indicando se os dados são válidos
  return true;
};

// salva um autor no banco - tb mudamos em relação ao outro bloco

const create = async (firstName, middleName, lastName) => {
  return connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));
};

module.exports = {
  getAll,
  findById,
  isValid,
  create
};
