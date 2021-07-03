const mysqlx = require('@mysql/xdevapi');

const connection = () => {
  // O método getSession cria uma conexão com o banco de dados. Ele recebe uma string URI, como root@senha123@localhost:33060/mvc_example, ou um objeto com as credenciais necessárias para estabelecer a conexão. Entre as opções possíveis, estão:
  return mysqlx.getSession({
    user: 'tryber',
    password: '2135',
    host: '10.2.1.109',
    port: 33060,
    schema: 'mvc_example',
  })
  // O método getSession retorna uma Promise que, quando resolvida, retorna um objeto que representa uma sessão com o banco. Encadeamos uma segunda Promise que chama o método getSchema. Esse método basicamente seleciona qual banco de dados (schema) vamos utilizar. O objeto retornado por getSchema é que fornece uma interface que vamos utilizar para fazer nossas queries.
  .then((session) => {
    return session.getSchema('mvc_example');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
};

module.exports = connection;
