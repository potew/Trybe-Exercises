// Escrevendo em arquivos no Node

const fs = require('fs');
// Função genérica:
fs.writeFile('./meu-arquivo.txt', 'Meu textão', (err) => {
  if (err) {
    throw err;
  }
  console.log('Arquivo salvo');
});

// Como dito anteriormente, há também outras maneiras de se criar uma promise. Uma delas que você já viu diversas vezes é utilizando o async/await:

// const fs = require('fs');
const text = 'Texto teste 2';

async function writingFiles2() {
  await fs.writeFile('./meu-arquivo.txt', text, (err) => {
    if (err) return console.log(err);
    console.log(text);
  })
}

writingFiles2();

// Há também um método nativo do módulo fs que transforma suas funções em promises. Para utilizá-lo, basta modificar a importação do módulo, como no exemplo abaixo:

const fs = require('fs').promises;

const text = 'Texto teste 3';

function writingFiles3() {
  fs.writeFile('./meu-arquivo.txt', text);
}

writingFiles3();

// Por último, há também, no módulo util, uma propriedade chamada promisify. Ela transforma o parâmetro recebido em uma promise. Veja no exemplo:
// const fs = require('fs'); - declarado acima, mas seria necessário aqui tb
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

const text = 'Texto teste 4';

function writingFiles4() {
  writeFile('./meu-arquivo.txt', text);
}

writingFiles4();

const fs = require('fs');

// Ainda sobre o writeFile, você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro opcional para os métodos writeFile e writeFileSync. A opção flag especifica como o arquivo deve ser aberto e manipulado. O padrão é 'w', que especifica que o arquivo deve ser aberto para escrita. Se o arquivo não existir, ele é criado. Caso contrário, ele é reescrito, ou seja, tem seu conteúdo apagado antes do novo conteúdo ser escrito. A flag 'wx', por exemplo, funciona como 'w', mas lança um erro caso o arquivo já exista

fs.writeFile('./meu-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx' }, function (err) {
  // A flag wx abre o arquivo para escrita caso ele não exista
  /*
    Flag =>
      w: write
      x: exclusive
  */
  // Se o arquivo existir, um erro é retornado
  if (err) throw err;
  console.log('Arquivo salvo');
});