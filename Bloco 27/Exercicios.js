// Exercícios Bloco 27.1
// Para testar, rode este arquivo no Node e use o programa Postman ou algum Curl-like para enviar/receber os dados.

// Inicie os exercícios criando uma aplicação NodeJS, com os comandos já aprendidos.
// npm init;
// npm install express;
// ou npm i express (mais as outras extensões/módulos tipo ejs, body-Parser, mysqlx)
const express = require('express');
const bodyParser = require('body-parser'); // Transforma uma string JSON para JSON mesmo

// Crie uma aplicação express que receba uma requisição do tipo GET no caminho /ping e retorne o JSON { "message": "Pong!" }.
const app = express();

app.listen(3000, function () {
  console.log('Exemplo de escuta na porta 3000');
});

app.get('/ping', function (_req, res) {  // Só recebi a res(ponse) no caso, aí coloquei o _underline na req. Se fosse o último parâmetro, poderia omitir
  res.send({ "message": "Pong!" });
});

// Crie um endpoint que receba requisições do tipo POST no caminho /hello, contendo o JSON { "name": "<nome do usuário>" } e retorne um JSON { "message": "Hello, <nome do usuário>!" };
app.route('/hello')
  .get((req, res) => {
    // req.query.name;
    res.send({ "message": `Hello, ${req.query.name}` })
  });

// Crie um endpoint que receba requisições do tipo POST no caminho /hello2, contendo o JSON { "name": "<nome do usuário>", "age": "<idade do usuário>" }. Caso o usuário tenha idade superior a 17 anos retorne um JSON { "message": "Hello, <nome do usuário>!" } com o status code 200. Caso contrário, retorne o JSON { "message": "Unauthorized"} com o status code 401;
app.route('/hello2')
  .get((req, res) => {
    const u_name = req.query.name;
    const u_age = req.query.age;
    if ( u_age > 17 ) {
      res.status(200).send({ "message": `Hello, ${u_name}` })
    } else {
      res.status(401).send({ "message": "Forbidden" })
    }
  });

// Crie um endpoint que receba requisições do tipo PUT no caminho /users/:name/:age e retorne o JSON { "message": "Seu nome é <name> e você tem <age> anos de idade" }.
app.route('/users/:name/:age')
  .put((req, res) => {
    res.json({ "message": `Seu nome é ${req.params.name} e você tem ${req.params.age} anos de idade` });
  })

// Agora você vai criar uma API de listagem dos personagens da série Simpsons. Como fonte de dados, você vai utilizar um arquivo chamado simpsons.json.
// Utilize o modulo fs do Node para ler/escrever arquivos.
const fs = require('fs');
// Caso algo dê errado em nível de código, deve ser retornado um código 500 (Internal Server Error).
// Caso dê tudo certo, a resposta deve voltar com status 200 OK.
// Foque nos contratos das APIs (o que elas devem receber e o que devem retornar).
// Para testar sua API durante o desenvolvimento, utilize ferramentas que permitem fazer requisições HTTP, como Postman e Insomnia.

// Crie um endpoint do tipo GET na rota /simpsons que deve retornar a lista completa de personagens.
app.route('/simpsons').get((_req, res) => {
  fs.readFile('simpsons.json', (err, data) => {
    res.send(data);
  })
});

// Crie um endpoint do tipo GET na rota /simpsons/:id que deve retornar apenas o personagem com o id informado na URL da requisição.
app.route('/simpsons/:id').get((req, res) => {
  fs.readFile('simpsons.json', (err, data) => {
    res.send(data[req.params.id]);
  })
});


// Crie um endpoint do tipo POST na rota /simpsons que será responsável por cadastrar novos personagens.
// O corpo da requisição deve receber os campos id e name;
