const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;

/* Nesse exemplo temos um model que, no banco de dados, representa a nossa tabela User com as colunas fullName e email.

Vale lembrar que existe também um comando para gerar um model pelo CLI:

npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string

Contudo, se você deseja utilizar esse comando, saiba que, além de criar o model, ele também cria uma migration para criar uma tabela no banco de dados. Como já temos e rodamos uma migration para criação da nossa tabela, nós não precisamos de executar o comando CLI para criar o model. */