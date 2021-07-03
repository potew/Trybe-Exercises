const fs = require('fs');

// Exercício 26.3.2
// Lendo arquivos por métodos assíncronos
console.clear();

const dir = '../../';

// Crie um script NodeJS que, utilizando apenas funções assíncronas e módulos padrão do NodeJS, receba o nome de uma pasta e:

// Escreva a quantidade de arquivos existentes dentro dela;
// Escreva a soma do tamanho de todos os arquivos presentes nela;
// Escreva no terminal o tempo total de execução do script.

const t1 = Date.now();

fs.readdir(dir, (err, files) => {
  if (err) {
    console.error(`Não foi possível ler a pasta ${dir}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(files);
  const t2 = Date.now() - t1;
  console.log(`Conteúdo da pasta lido em ${t2}ms. \nTamanho total: ${files.byteLength/1000} kb`);
});
