// form-data é uma biblioteca que nos ajudará a montar uma requisição do tipo multipart/form-data. Diferente dos tipos de requisições que vimos até agora, ele nos permite trafegar uma stream de dados conforme ela é lida do disco local. Ela pode ser usada para submeter formulários e fazer upload de arquivos para outras aplicações web.

const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

// Criamos um stream de um arquivo
const stream = fs.createReadStream('./doc.txt');

// Aqui, criamos um formulário com um campo chamado 'file' que carregará
// o stream do nosso arquivo
const form = new FormData();
form.append('file', stream);

// Esse arquivo não será enviado no body da requisição como de costume.
// Em ambientes NodeJS, é preciso setar o valor de boundary no header
// 'Content-Type' chamando o método `getHeaders`
const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3001/files/sent-files', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => { console.log(response.status) })
  .catch((error) => { console.error(error) });
