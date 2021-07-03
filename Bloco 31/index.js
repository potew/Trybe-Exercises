const express = require('express');
const { Addresses, Employees } = require('./models');
const { Books, Users } = require('./models');

const app = express();

app.get('/employees', (_req, res) => Employees
  .findAll({ include: { model: Addresses, as: 'addresses' } })
  .then((answer) => res.status(200).json(answer))
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

const PORT = 3000;
app.listen(PORT, () => console.log(`Port: ${PORT}`));

// A grande diferença quando vamos fazer uma requisição que necessite de utilizar uma association com o Sequelize, é o campo include. Esse campo diz ao Sequelize quais serão as configurações da requisição. A propriedade model se refere a qual tabela será utilizada. Já a propriedade as deve ser igual ao que declaramos no momento da criação da associação no respectivo model.

//  Rode o servidor invocando npx nodemon index.js.

// Eager Loading (puxa tudo de uma vez)

app.get('/employees/:id', (req, res) => Employees
  .findAll({
    where: { employee_id: req.params.id },
    include: [{
      model: Addresses, as: 'addresses',
      // attributes: { exclude: ['number'] }, se quisesse excluir algum campo, faria assim
    }],
  })
  .then((employee) => {
    if (!employee.length) {
      return res.status(404).send({ message: 'Funcionário não encontrado' });
    }
    if (req.query.includeAddresses === 'true') { // Lazy loading - só busca os dados quando solicitados
      return Addresses.findAll({ where: { employee_id: req.params.id } })
        .then((address) => res.status(200).json(
          { employee: employee[0], address },
        ));
    }
      return res.status(200).json(employee);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

// Queries relacionamento N:N

app.get('/usersbooks/:id', (req, res) => Users
  .findAll({
    where: { user_id: req.params.id },
    include: [{ model: Books, as: 'books', through: { attributes: [] } }],
  }) //  sem o through, em cada book, apareceriam todos seus respectivos users.
  .then((usersbooks) => {
    if (!usersbooks.length) {
      return res.status(404).send({ message: 'Usuário não encontrado' });
    }
    return res.status(200).json(usersbooks);
  })
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));

// Exercícios

app.get('/books', (_req, res) => Books
  .findAll({})
  .then((booklist) => res.status(200).json(booklist))
  .catch(() => res.status(500).json({ message: 'Algo deu errado' })));
