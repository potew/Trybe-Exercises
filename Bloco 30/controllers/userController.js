// Um ponto importante de mudança estrutural que o sequelize traz é que, da forma que aprendemos antes, sem o sequelize, nossa lógica de validações, interação com o banco de dados (get, insert etc.), entre outras, se centralizavam no model. Com o Sequelize, essa lógica se centraliza nos controllers. O modelo fica responsável apenas por representar a estrutura do banco de dados, para ajudar o sequelize a realizar as operações.

const express = require('express');
const { User } = require('../models');
const router = express.Router();

router.get('/', (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

/* Busca um usuário */
router.get('/:id', (req, res, next) => {
  User.findByPk(req.params.id)
    .then((user) => {
      if (user === null) {
        res.status(404).send({ message: 'Usuário não encontrado' });
      }

      res.status(200).json(user);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    });
});

/* Cria um novo usuário */
router.post('/', (req, res) => {
  const { fullname, email } = req.body;

  User.create({ fullname, email }).then((user) => {
      res.status(200).json(user);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

/* Atualiza um usuário */
router.put('/:id', (req, res) => {
  const { fullname, email } = req.body;

  User.update(
    { fullname, email },
    {
      where: { id: req.params.id },
    }
  ).then((result) => {
      res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

/* Remove um usuário */
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => {
      res.status(200).send({ message: `Usuário excluído com sucesso.` });
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).send({ message: 'Algo deu errado' });
    });
});

module.exports = router;
