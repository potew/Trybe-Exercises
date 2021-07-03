const rl = require('readline-sync');
const inquirer = require('inquirer');

// Exercício 1
function calculaIMCq1() {
  const altura = rl.questionFloat('Digite a altura em metros: ');
  const peso = rl.questionFloat('E agora, digite o peso em kg: ');
  
  if (altura < 0 || peso < 0) {
    console.log('Algum dos valores é negativo, corrija');
    return;
  }
  
  const imc = (peso/(Math.pow(altura, 2))).toFixed(1);
  console.log(`Seu IMC é ${imc}!!`);
  mensagemQ2(imc);
}

function mensagemQ2(imc) {
  switch (true) {
    case (imc < 18.5):
      console.log('Abaixo do peso (magreza)');
      break;  
    case (imc >= 18.5 && imc <= 24.9):
      console.log('Peso normal');
      break;
    case (imc > 24.9 && imc < 30):
      console.log('Acima do peso/sobrepeso');
      break;
    case (imc >= 30 && imc <= 34.9):
      console.log('Obesidade grau 1');
      break;
    case (imc > 34.9 && imc <= 39.9):
      console.log('Obesidade grau 2');
      break;
    default:
      console.log('Obesidade grau 3 e 4');
      break;
  }
}

// Exercício 3
const floatValidation = (input) => {
  !isNaN(input) || 'Digite um número válido';
}

async function calculaIMCq3() {
  const respostas = await inquirer.prompt(
    [{
      type: 'input',
      name: 'altura',
      message: 'Digite a altura em metros: ',
      default: 1.73,
      validate: floatValidation()
    },
    {
      type: 'input',
      name: 'peso',
      message: 'Digite o peso em kg: ',
      default: 58,
      validate: floatValidation()
    }
  ]);

  const peso = parseFloat(respostas.peso);
  const altura = parseFloat(respostas.altura);
  const imc = (peso/(Math.pow(altura, 2))).toFixed(2);
  console.log(`Seu IMC é ${imc}.`);
  mensagemQ2(imc);
}

console.clear();
// calculaIMCq1();
calculaIMCq3();