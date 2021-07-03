"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Leonardo",
          email: "leo@test.com",
        },
        {
          fullName: "JEduardo",
          email: "edu@test.com",
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};

// Na função acima, estamos utilizando o parâmetro recebido pela função queryInterface para conversar com o banco de dados. Dessa forma conseguimos inserir os dados que queremos. Estamos adicionando os dados, que estão na estrutura de uma array de objetos, na tabela Users. O queryInterface tem a função bulkInsert, a qual estamos utilizando, que insere múltiplos dados na tabela.
// Para fazer o envio dos dados, execute npx sequelize db:seed:all - e acrescente um :undo entre o db e o all para desfazer caso queira