// 3. A função getCountry abaixo tem aproximadamente 50% de chance de obter com sucesso um país, tendo um callback para poder ser feita qualquer operação sobre o país retornado. Adicione um outro callback para getCountry de forma que trate a mensagem de erro retornada.

const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 2000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccessFunction) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccessFunction(country); //  Função a ser executada se der certo (retorna nome do país ou a moeda)
    }
    else {
      const errorMessage = printErrorMessage("Country could not be found");
      return errorMessage;
    }
  }, delay());  // Este delay é para simular a latência da rede/servidor numa resposta real.
};

// Deve imprimir "Returned country is Brazil" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em falha
getCountry(countryCurrency, printErrorMessage);