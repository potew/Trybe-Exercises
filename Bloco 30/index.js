// Aula de SOLID - Bl. 31.1 - Esse exercício, basicamente, controla um catálogo de plantas para um instituto de ciências. Esse código precisa ser adaptado para o padrão SOLID para transformá-lo em uma API, e é isso que você irá fazer.

const express = require("express");
const app = express();
const {
  getPlants,
  getPlantById,
  removePlantById,
  editPlant,
  createNewPlant
} = require("./controllers/plantController.js");

app.get("/plants", (req, res) => {
  const plants = getPlants();
  res.send(plants);
});

app.get("/plant/:id", (req, res) => {
  const plant = getPlantById(req.params.id);
  res.send(plant);
});

app.delete("/plant/:id", (req, res) => {
  const { id } = req.params;
  const plant = removePlantById(id);
  res.send(plant);
});

app.post("/plant/:id", (req, res) => {
  const { id } = req.params;
  const newPlant = req.body.plant;
  const plant = editPlant(id, newPlant);
  res.send(plant);
});

app.post("/plant", (req, res) => {
  const newPlant = req.body.plant;
  const plant = createNewPlant(newPlant);
  res.send(plant);
});

app.get("/sunny/:id", (req, res) => {
  const { id } = req.params;
  const plant = getPlantById(id);
  res.send(plant);
});

app.listen(3001, function () {
  console.log("Ouvindo a porta 3001!");
});
