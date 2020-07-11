const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const randomizar = () => Math.floor(Math.random() * 101);

module.exports = { somar, subtrair, multiplicar, dividir, randomizar };