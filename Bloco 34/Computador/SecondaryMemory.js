const fs = require('fs');

// Agora, crie um arquivo SecondaryMemory.js para ser a nossa memória secundária e adicione o conteúdo abaixo. Mais uma vez você será responsável pela implementação dos métodos get e load porém, agora, utilizaremos o fs, para persistir esses dados em disco.

const DISK_PATH = './disko';

class SecondaryMemory {
  load (value) {
    const disk = fs.readdirSync(DISK_PATH)
    const nextFileName = `${DISK_PATH}/cel${disk.length}`;
    fs.writeFileSync(nextFileName, value);
  }

  get (index) {
    const fileName = `${DISK_PATH}/cel${index}`;
    return parseFloat(fs.readFileSync(fileName));
  }

  clean () {
    fs.rmdirSync(DISK_PATH, { recursive: true });
    fs.mkdirSync(DISK_PATH);
  }
}

module.exports = SecondaryMemory