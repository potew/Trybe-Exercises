/*2-Crie uma função que recebe um array de inteiros e retorna o índice do maior valor.
    Array de teste: [2, 3, 6, 7, 10, 1];.
    Valor esperado no retorno da função: 4.
*/

const teste = [2, 3, 6, 7, 10, 1];

function maiorDe(array) {
    let i, maior = array[0], maiorInd = 0;
    for (i = 1; i < array.length; i++)
        if (array[i] > maior) {
            maior = array[i];
            maiorInd = i;
        }
    return maiorInd;
}

console.log("A posição que corresponde ao maior número dessa lista é a " + maiorDe(teste));