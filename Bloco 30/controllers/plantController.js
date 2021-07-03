let defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
  {
    id: 3,
    breed: "Jasminea",
    size: 101,
    needsSun: true,
    origin: "Brazil",
  },
  {
    id: 4,
    breed: "Sunspin",
    size: 123,
    needsSun: true,
    origin: "Japan",
  },
];

// Remova as interações com localStorage e manipule apenas a variável defaultPlants.

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = needsSun ?
    size *  0.77 + (origin === 'Brazil' ? 8 : 7) :
    (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

// const savePlants = () => {
//   const plants = JSON.stringify(defaultPlants);
//   localStorage.setItem("plants", plants);
// };

const getPlants = () => {
  return defaultPlants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id !== id);
};

// const getPlantsThatNeedsSunWithId = (id) => {
//   const filteredPlants = defaultPlants.filter((plant) => {
//     if (plant.needsSun && plant.id === id) {
//       if (plant.specialCare.waterFrequency > 2) {
//         return plant;
//       }
//     }
//   });
//   return filteredPlants;
// };

const getPlantsThatNeedsSunWithId = (id) => {
  return isSpecialCarePlant(defaultPlants.getPlantById(id));
};

const isSpecialCarePlant = (plent) => {
  return (plent.needsSun && plent.specialCare.waterFrequency > 2)
  ? plant
  : null;
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    return (plant.id === plantId) ? newPlant : plant;
  });
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  return defaultPlants.push(mappedPlant);
};

module.exports = {
  initPlant,
  // savePlants,
  getPlants,
  getPlantById,
  removePlantById,
  getPlantsThatNeedsSunWithId,
  editPlant,
  createNewPlant
};
