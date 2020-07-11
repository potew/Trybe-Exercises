/*6-Crie uma função que recebe um número inteiro N e retorna o somatório de todos os números de 1 até N.
    Valor de teste: N = 5.
    Valor esperado no retorno da função: 1+2+3+4+5 = 15.
*/
const teste = 35;

function somatoria(n) {
    let i = 1, soma = 0;
    do {
        soma += i;
        i++;
    }
    while (i <= n)
    return soma;                        //Por fim retorna o valor correspondente à maior contagem encontrada.
}

console.log("Soma de todos os números até " + teste + ": " + somatoria(teste));     //Chamada da função