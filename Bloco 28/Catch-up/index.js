const express = require('express');
const controller = require('./controller');
const middlewares = require('./middlewares');
const app = express();

app.get('/posts', controller.allPosts);
app.get('/posts/:id', middlewares.verifyId, controller.postById);

app.listen(3000, () => console.log('Escutando na 3000'));
