const mongoClient = require('mongodb').MongoClient;

const MONGO_DB_URL = 'mongodb://10.2.1.109:27017';

module.exports = () => {
  return mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('mvc_example'))
    .catch((err) => {
      console.error(err);
      process.exit(1);
   });
};

// Sobre as flags acima
// useNewUrlParser: O time do mongodb reescreveu a forma que o driver utiliza para interpretar a URL de conexão ao banco. Por ser uma mudança muito grande, essa nova forma de interpretação de URLs só é ativada com o uso dessa flag. A forma antiga, no entanto, está depreciada, e seu uso emite um warning no terminal.

// useUnifiedTopology: Nas versões mais recentes do driver do mongodb, a ferramenta que realiza a descoberta de servidores e a conexão com os mesmos foi alterada. Essa flag diz para o driver do mongodb que queremos utilizar essa nova forma de conexão. A forma de conexão antiga está depreciada e seu uso emite um warning no terminal.
