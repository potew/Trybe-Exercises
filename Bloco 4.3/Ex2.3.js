/*3-Crie uma função que recebe um array de inteiros e retorna o índice do menor valor.
    Array de teste: [2, 4, 6, 7, 10, 0, -3];.
    Valor esperado no retorno da função: -3.
*/
const teste = [2, 4, 6, 7, 10, 0, -3];

function menorDe(array) {
    let i, menor = array[0], menorInd = 0;
    for (i = 1; i < array.length; i++)
        if (array[i] < menor) {
            menor = array[i];
            menorInd = i;
        }
    return menorInd;
}

console.log("A posição que corresponde ao menor número dessa lista é a " + menorDe(teste));