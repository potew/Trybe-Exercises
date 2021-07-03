// Tabela de associação N:N entre users <> books
const createUserBooks = (sequelize, _DataTypes) => {
  const UserBooks = sequelize.define(
    'UserBooks',
    {},
    { timestamps: false },
  );

  UserBooks.associate = (models) => {
    models.Books.belongsToMany(models.Users, {
      as: 'users',
      through: UserBooks,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
    models.Users.belongsToMany(models.Books, {
      as: 'books',
      through: UserBooks,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UserBooks;
};

module.exports = createUserBooks;

// Primeiro de tudo, note que não temos nenhum atributo nesse model. Isso é possível porque quando estabelecemos os relacionamentos usando UserBooks como tabela de associação, o Sequelize já entende que esse model precisa ter os IDs das duas tabelas sendo associadas.

// Depois, temos um novo tipo de relacionamento: o belongsToMany. Esse relacionamento cria um relacionamento do tipo N:N, utilizando o model especificado na opção through como tabela de associação. Temos também o alias daquela associação, na chave as e, por último, temos os parâmetros foreignKey e otherKey. Esses dois parâmetros dizem ao Sequelize qual campo utilizar na tabela de associação para identificar cada uma das entidades.

//  Criar as seeds agora: npx sequelize seed:generate --name user-books