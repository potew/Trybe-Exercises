const express = require('express');
const plantController = require('./controllers/plantController');

const app = express();

app.get('/plants', plantController.getPlants);
app.get('/plant/:id', plantController.getPlantById);
app.delete('/plant/:id', plantController.removePlantById);
app.post('/plant/:id', plantController.editPlant);
app.post('/plant', plantController.createNewPlant);
app.get('/sunny/:id', plantController.getPlantsThatNeedsSunWithId);

module.exports = app;

//  Obs.: utilizar as rotas do index.js