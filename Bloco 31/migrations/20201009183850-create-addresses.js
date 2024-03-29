module.exports = {
  up: async (queryInterface, Sequelize) => {
    const AddressesTable = queryInterface.createTable('Addresses', {
      address_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: { allowNull: false, type: Sequelize.STRING },
      street: { allowNull: false, type: Sequelize.STRING },
      number: { allowNull: false, type: Sequelize.INTEGER },
      employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: { model: 'Employees', key: 'employee_id' },
      },
    });

    return AddressesTable;
  },

  down: async (queryInterface) => queryInterface.dropTable('Addresses'),
};

// Essa migration cria uma FK na tabela Addresses, que relaciona o campo employee_id dessa tabela ao campo employee_id da tabela Employees.