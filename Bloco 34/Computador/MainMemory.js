// Crie um projeto que irá simular a arquitetura que vimos em aula de uma maneira bem simples, ela terá um arquivo principal para a execução do programa que representará nosso Sistema Operacional e duas classes que representarão a Memória Principal e a Secundária.
// Cada tipo de memória irá armazenar os dados de fato na memória que ela representa, sendo a Principal armazenando tudo em memória RAM e a secundária no disco através do fs (File System) e através do NodeJS estaremos fazendo chamadas ao Sistema Operacional para realizar essas tarefas para gente, pois ele melhor do que ninguém saberá utilizar as memórias. O objetivo do nosso script será realizar a soma de um array de números aleatórios utilizando as duas implementações de memória. Os dados serão sempre armazenados como strings!

class MainMemory {
  constructor () {
    this.loadedMemory = []
  }

  load (value) {
    this.loadedMemory.push(parseFloat(value));
  }

  get (index) {
    return this.loadedMemory[index];
  }

  clean () {
    this.loadedMemory = []
  }
}

module.exports = MainMemory