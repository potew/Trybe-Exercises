const mysqlx = require('@mysql/xdevapi');

const connection = () => {
  return mysqlx
    .getSession({
      user: 'root',
      password: '',
      host: 'localhost',
      port: 33060,
    })
    .then((session) => {
      return session.getSchema('pretty_cats');
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

// const db = await connection();
// const results = await db.getTable('cats').select(['name', 'age']).execute();
// const cats = results.fetchAll();

const getAll = async () =>
  connection()
    .then((db) => db.getTable('cats').select(['name', 'age']).execute())
    .then((results) => results.fetchAll())
    .then((cats) => cats.map(([name, age]) => ({ name, age })));

const getCatById = async (id) =>
  connection()
    .then((db) =>
      db
        .getTable('cats')
        .select(['name', 'age'])
        .where('id = :id')
        .bind('id', id)
        .execute()
    )
    .then((results) => results.fetchAll()[0])
    .then(([name, age]) => ({ name, age }));

const add = (name, age) =>
  connection().then((db) =>
    db.getTable('cats').insert(['name', 'age']).values(name, age).execute()
  );

const isValid = (name, age) =>
  typeof name === 'string' &&
  name.length >= 3 &&
  name.length < 21 &&
  age &&
  age > 0;

module.exports = {
  getAll,
  getCatById,
  add,
  isValid
};