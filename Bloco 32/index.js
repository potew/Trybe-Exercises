// Servidor!!! - Aula do bloco 32.2. Não tem nada a ver com os arquivos client e server.js dessa mesma pasta.

const app = require('express')();
const httpserver = require('http').createServer(app);
const io = require('socket.io')(httpserver);
// Estamos importando o pacote socket.io, o qual é uma função, e dessa função temos como retorno um servidor socket. Para que o client possa se comunicar com o back-end, nós temos que implementar o script do socket.io dentro da página HTML.

// Para acessar o exemplo, acesse o endereço(localhost) na raiz e porta do servidor http(3k).
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => { // Aguarda a connection para executar
  console.log('Cliente conectou-se'); // igual feito na aula anterior, porém dessa vez em um servidor escalável. Lembrando que criamos os eventos sempre dentro do connection
  socket.broadcast.emit('mensagemServer'); // Manda a mensagem para todo mundo que estiver com a janela aberta

  socket.on('mensagem', (msg) => {
    io.emit('mensagemServer', msg); // Aqui ele manda uma resposta, mas só para o cliente que enviou a request. Basta colocarmos o nome que queremos dentro do método .on() e pronto, já temos nosso evento personalizado
    console.log(`Mensagem recebida pelo cliente: ${msg}.`);
  });
  
  socket.on('disconnect', () => { // Assim que o cliente desconecta manda isso pra ele
    io.emit('adeus', { mensagem: 'Esta é uma mensagem do server pro cliente.' });// O nome do evento (adeus) tem q ser o mesmo em ambos
    console.log('Usuário desconectado.'); // Lembre-se de deixar tudo relacionado a "conexão socket" dentro do evento "connection."
  });
});

// Sintaxe:
// io.emit('Nome do seu evento', {
//   propriedade: 'Do seu objeto',
//   enviado: 'Para o cliente da conexão atual'});

httpserver.listen(3000, () => {
  console.log('Servidor do Express ouvindo na porta 3000');
});

io.listen(5500, () => {
  console.log('Socket.io server ouvindo na porta 5500');
})
