const express = require('express');
const multer = require('multer');

const app = express();

/* Definindo nossa pasta pública */
app.use(express.static(__dirname + '/sent-files'));
// Dirname é a pasta onde o arquivo está salvo. Isso faz com que o caminho de /sent-files seja sempre relativo à pasta onde este arquivo está rodando

/* Dando nomes aos bois (ao invés daqueles nomes aleatórios)
  destination: destino do nosso arquivo filename: nome do nosso arquivo.
   No caso vamos dar o nome que vem na propriedade originalname, ou seja,
   o mesmo nome que o arquivo tem no computador do usuário */
const storage = multer.diskStorage({
  destination: (req, file, callback) => { callback(null, 'sent-files'); },
  filename: (req, file, callback) => { callback(null, file.originalname); }
});

/* Cria uma instância (Middleware) do multer configurada para mandar o arquivo sem renomear */
const upload = multer({ storage });

/* Cria uma instância (Middleware) do multer configurada */
// const upload = multer({ dest: 'sent-files' });
// Envio default (renomeia os arquivos)

app.get('/ping', (req, res) => res.send('pong!'));

// Rota que vai receber e salvar um único arquivo na pasta sent-files:
app.post('/files/sent-files', upload.single('file'), (_req, res) =>
  res.send().status(200) // ^ Middleware do multer
);
// O Multer adiciona um objeto body e um objeto file ao objeto request recebido na callback. Os objetos body e file contêm os valores dos campos de texto e o arquivo enviados pelo formulário, respectivamente.
// O parâmetro passado na chamada indica o nome do input do formulário enviado que conterá o arquivo. No caso, esse nome é file, mas poderia ter outro nome em outros formulários. Ex.: <input type="file" name="post" />

const port = 3001;
app.listen(port, () => console.log(`Running on port: ${port}`));