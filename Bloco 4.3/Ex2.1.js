/*Crie uma função que recebe uma string e retorna true se é um palíndromo ou false se não for.
Exemplo de palíndromo: arara.
verificaPalindrome("arara");
    Retorno esperado: true
verificaPalindrome("desenvolvimento");
    Retorno esperado: false
*/

const word = "abcdefggfedcba";

function verificaPalindrome(palavra) {
    let tam = palavra.length, condOK;
    for (let i = 0; i < tam / 2; i++)
        if (palavra[i] == palavra[tam - i - 1]) {
            console.log(palavra[i], palavra[tam - 1 - i]);
            condOK = true
        }
        else
            return false;
    return condOK;
}

console.log("A palavra " + word + " é palíndroma? " + verificaPalindrome(word));