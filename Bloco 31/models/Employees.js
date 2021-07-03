// models/Employees.js
const createEmployees = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    employee_id: { type: DataTypes.INTEGER, primaryKey: true },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  Employees.associate = (models) => {
    Employees.hasOne(models.Addresses, // Para múltiplos relaacionamentos, seria hasMany
      { foreignKey: 'employee_id', as: 'addresses' });
  };

  return Employees;
};

module.exports = createEmployees;

// A função Employees.associate = (models) => {}, que criamos é onde iremos declarar as associações daquele Model. No nosso caso, estamos dizendo que a tabela Employees possui um Address, referenciado pela foreign key employee_id, e que o model Employees deve chamar de addresses (note a letra minúscula), como definido na propriedade as.