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

const getAll = async () =>
  connection()
    .then((db) =>
      db
        .getTable("authors")
        .select(["id", "first_name", "middle_name", "last_name"])
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((authors) =>
        authors.map(([id, firstName, middleName, lastName]) =>
          getNewAuthor({
            id,
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
    .then((db) =>
      db
        .getTable('authors')
        .select(['first_name', 'middle_name', 'last_name'])
        .where('id = :id')
        .bind('id', id) // Importantíssimo para evitar SQL injection
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((authors) => authors[0]);

  if (!authorData) return null;

  const [firstName, middleName, lastName] = authorData;

  return getNewAuthor({ id, firstName, middleName, lastName });
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;
    // retorna um boolean indicando se os dados são válidos
  return true;
};

// salva um autor no banco
const create = async (firstName, middleName, lastName) =>
  connection().then((db) =>
    db
      .getTable('authors')
      .insert(['first_name', 'middle_name', 'last_name'])
      .values(firstName, middleName, lastName)
      .execute()
  );

module.exports = {
  getAll,
  findById,
  isValid,
  create
};
