/*4-Crie uma função que recebe um array de nomes e retorna o nome com a maior quantidade de caracteres.
    Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
    Valor esperado no retorno da função: Fernanda.
*/
const nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorPalavra(array) {
    let i, maior = array[0];
    for (i = 1; i < array.length; i++)
        if (array[i].length > maior.length) {
            maior = array[i];
        }
    return maior;
}

console.log("O maior nome dessa lista é " + maiorPalavra(nomes));