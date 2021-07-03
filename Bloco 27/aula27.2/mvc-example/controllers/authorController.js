// No express, um controller é uma função usada como callback para responder a requisições que chegam a uma rota. Ela será responsável por orquestrar o fluxo da aplicação no que diz respeito àquela rota: extrair parâmetros da URL ou do body da requisição, se comunicar com o modelo para ler ou atualizar dados e decidir o que deve ser enviado de volta para a pessoa ques está usando a aplicação.

const Author = require('../models/Author');

const listAuthors = async (req, res) => {
  const authors = await Author.getAll();
  res.render('authors/index', { authors });
  // Renderiza respectivamente o caminho do arquivo bem como os dados necessários para renderizar o template. Repare na propriedade authors do objeto
};

const showAuthor = async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).render('404');

  res.render('authors/show', { author });
};

// Renderiza o formulário de inserir um autor
const newAuthor = (_req, res) => {
  res.render('authors/new', { message: null });
};

// Extrai os parâmetros do formulário que chegam em req.body, verifica se os dados enviados são válidos. Caso não sejam, o formulário é renderizado novamente, passando uma mensagem indicando que os dados fornecidos são inválidos. Caso os dados sejam válidos, pede ao modelo para criar um novo escritor e redireciona a pessoa para a lista completa em /authors.
const createAuthor = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.render('authors/new', { message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);
  res.redirect('authors');
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor
}

// O controller listAuthors requisita ao model uma lista com todos os escritores cadastrados e envia um HTML para a view como resposta.
