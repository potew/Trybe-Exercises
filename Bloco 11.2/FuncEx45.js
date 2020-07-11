// 4. Dentro de um mesmo arquivo, crie três funções. 
// A primeira deve receber uma string e retorná-la em caixa alta. 
// A segunda deve também receber uma string e retornar só a primeira letra. 
// A terceira deve receber duas strings e concatená-las. 

const fun1 = string => string.toUpperCase();
const fun2 = string => string.charAt(0);
const fun3 = (string1, string2) => string1 + string2;

module.exports = { fun1, fun2, fun3 };