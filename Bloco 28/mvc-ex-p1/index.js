// Para não ser necessário criar uma sessão e selecionar o schema sempre que precisarmos acessar o banco, criamos uma função connection que encapsula essa lógica. Também encadeamos na Promise uma chamada ao método catch para lidar com erros de conexão com o banco. No caso, simplesmente logamos o erro no console e terminamos o processo.

// const connection = require('./models/connection');

// connection().then((session) => {
//   console.log('Conectado ao MySQL!');
// }).catch(e => console.log(e));

const express = require('express');
const bodyParser = require('body-parser');
const authorController = require('./controllers/authorController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// configura o express para utilizar o EJS por padrão como template engine. Dessa forma, não precisamos especificar a extensão do arquivo que queremos utilizar.
app.set('view engine', 'ejs');

// adiciona o diretório /views à lista de diretórios em que o expresss vai procurar um arquivo com o nome especificado pelo método render. Assim, não precisamos especificar o caminho completo do arquivo em todos os momentos.
app.set('views', './views');

// Em index.js, importamos o express e iniciamos uma nova aplicação. A essa aplicação, adicionamos uma nova rota GET /authors. Passamos como callback a função controller.

app.get('/authors', authorController.listAuthors);
app.get('/authors/new', authorController.newAuthor);  // Esta ordem importa!!
app.get('/authors/:id', authorController.showAuthor);
// Se você inverter a ordem das rotas, ao entrar em localhost:3000/authors/new, a rota /authors/:id será a primeira a dar match, como se você estivesse procurando um escritor com o id new, e receberá como resposta a página 404.

app.post('/authors', authorController.createAuthor);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
