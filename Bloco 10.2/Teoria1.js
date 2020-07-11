// 1. No código abaixo você tem a função getUser que retorna uma pessoa qualquer. Complete a função getUser de forma que ela receba uma outra função como parâmetro para que possa realizar as operações abaixo sobre a pessoa retornada.

const assert = require('assert');

const userFullName = (firstName, lastName) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = (firstName, nationality) => `${firstName} is ${nationality}`;

const getUser = (funcao) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  if (funcao === userFullName)
    return userFullName(userToReturn.firstName, userToReturn.lastName);
  return userNationality(userToReturn.firstName, userToReturn.nationality);
};

assert.equal(getUser(userFullName), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.equal(getUser(userNationality), "Ivan is Russian"); // complete a chamada da função de getUser
