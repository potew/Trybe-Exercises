const express = require('express');
const rescue = require('express-rescue');
const app = express();
const router = express.Router();

const authMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.status(401);
    res.send({ message: 'Token inválido'});
  }
};

const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu ruim :(');
};

const logRequestMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};

app.use(logRequestMiddleware);
router.use(authMiddleware);

router.get('/hello', (req, res) => {
  res.send({ message: 'Olá de novo!!!'});
});

app.use('/secure', router);

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/error', rescue(async (req, res) => {
  throw new Error('Eu retorno um erro!');
}));

app.use(errorMiddleware);

app.listen(3000, () => console.log(`App ouvindo na porta 3000!`));