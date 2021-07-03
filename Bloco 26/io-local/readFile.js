const fs = require('fs');

// Lendo arquivos por métodos assíncronos
const arq1 = 'chat.txt';
const arq2 = 'FukuReport1b.pdf';
console.clear();

// Esse método é responsável por ler arquivos e trazer seu conteúdo para dentro do NodeJS e recebe três parâmetros:

// O nome do arquivo;
// Um parâmetro opcional que, quando é uma string, define o encoding que será utilizado durante a leitura do arquivo;
// fs.readFile(arq1, 'utf-8', (err, data1) => {
// Uma callback que permite receber e manipular os dados lidos do arquivo.

// A callback é uma função que recebe 2 parâmetros: err e data. Caso ocorra um erro durante a leitura do arquivo, o parâmetro err virá preenchido com as informações referentes ao erro. Quando esse parâmetro vier vazio, significa que a leitura do conteúdo do arquivo ocorreu sem problemas. Nesse caso, o segundo parâmetro, data, virá preenchido com o conteúdo do arquivo.

const t1 = Date.now();

fs.readFile(arq1, (err, data1) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${arq1}\n Erro: ${err}`);
    process.exit(1);
  }
  const t2 = Date.now() - t1;
  console.log(`Conteúdo do arquivo lido em ${t2}ms. \nTamanho total: ${data1.byteLength/1000} kb`);
});

const t3 = Date.now();

fs.readFile(arq2, (err, data2) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${arq2}\n Erro: ${err}`);
    process.exit(1);
  }
  const t4 = Date.now() - t3;
  console.log(`Conteúdo do arquivo lido em ${t4}ms. \nTamanho total: ${data2.byteLength/1000} kb`);
});
