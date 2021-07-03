const fs = require('fs');

// Exercício 26.3.1
// Lendo arquivos por métodos síncronos
// Logo após importarmos o módulo fs, criamos uma variável chamada nomeDoArquivo, contendo o nome (fixo) do arquivo que vamos ler e, em seguida, chamamos o método fs.readFileSync.
const arq1 = 'chat.txt';
const arq2 = 'chat2.txt';
console.clear();

try {
  const ti = Date.now();
  const data = fs.readFileSync(arq1);
  // Para que o texto aparecesse na tela, seria necessário adicionar o charset como parâmetro para que ele entenda que é uma string. Se deixar sem nada, ele seria lido como raw buffer (tudo em hex), mas pode ter o tamanho calculado abaixo
  console.log(data);
  const td = Date.now();
  console.log(`Foram gastos ${td - ti}ms para ler e exibir na tela o primeiro arquivo}`);
  const data2 = fs.readFileSync(arq2);
  console.log(`Tempo total para os 2 arquivos: ${Date.now() - ti}ms`);
  console.log(`Tamanho total: ${(data.byteLength + data2.byteLength)/1000}kb. Obs.: Esse bytelength só funciona em fileSynscstreams bufferizadas e cruas, não no arq direto nem na string codificada!!`);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(`Motivo: ${err}`);
}