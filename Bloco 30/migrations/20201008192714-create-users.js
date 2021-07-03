'use strict';

// No código abaixo, iremos criar uma tabela chamada Users, com os campos id, fullName, email, createdAt e updateAt. Caso precisemos reveter essa operação, o código irá apenas apagar a tabela. Assim escrevemos uma migration perfeitamente reversível!

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UsersTable = queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
    });

    return UsersTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("Users"),
};

// Com a migration criada, basta executarmos pelo CLI
//> npx sequelize db:migrate
// Ou, para reverter: npx sequelize db:migrate:undo