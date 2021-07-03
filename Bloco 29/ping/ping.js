const axios = require('axios');
// Exemplos usando a lib Axios.

/* Faz uma rquisição do tipo GET */
axios
  .get('http://localhost:3001/ping/')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
  })
  .catch((error) => {
    console.log(error);
  });

// Existem outras formas de se fazer requisições HTTP através do axios, ex.:
axios.get('/user', {
  params: {
    ID: 12345
  }
})
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
})
.then(() => {
  // sempre executa no final, independente do que aconteça
});

// Você pode usar métodos async também
const getUser = async () => {
try {
  const response = await axios.get('/user?ID=12345');
  console.log(response);
  } catch (error) {
  console.error(error);
  }
}

// Ex. 2:
const body = {
  firstName: 'Fred',
  lastName: 'Flintstone'
};

axios.post('/user', body)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });