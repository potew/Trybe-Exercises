/*7-Crie uma função que recebe uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
    Valor de teste: "trybe" e "be"
    Valor esperado no retorno da função: true
    verificaFimPalavra("trybe", "be");
    Retorno esperado: true
    verificaFimPalavra("joaofernando", "fernan");
    Retorno esperado: false
*/
const string1 = "trybobebe", string2 = "be";

function verificaFimPalavra(word, ending) {
    let tamWord = word.length;
    let tamEnding = ending.length;
    if (word.lastIndexOf(ending) == tamWord - tamEnding)        //Verifica se a palavra menor está contida no final da maior
        return true;
    else
        return false;
}

console.log("A palavra menor está contida no final da maior? " + verificaFimPalavra(string1, string2));