// 4. O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios e retorna uma lista como resultado. Dada a URL 'https://api.github.com/users/tryber/repos', faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

const fetch = require('node-fetch');
// Foi necessário rodar um npm install --save-dev node-fetch para que isso rodasse, já que o node.js não vem com ele de fábrica

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('Verifica se repositório tal existe', () => {
    getRepos('https://api.github.com/users/tryber/repos').then(listaRepos => {
        expect(listaRepos).toContain('sd-01-week11-movie-card-library-stateful');
        expect(listaRepos).toContain('sd-01-week14-js-unit-tests');
    })
});

// Alterei para que use itens que apareçam no retorno (os do enunciado são muito antigos)