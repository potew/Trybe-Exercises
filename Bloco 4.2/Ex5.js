/*
5- (Bônus) Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
        n = 
____*____  1     5
__ * *___  3    456
_ *   *__  5   34567
_*     *_  7  2345678
*********  9
*/

const n = 9;
let linhaSaida, posHorizontal, posVertical;
let ladoEsq = Math.floor(n / 2);
let ladoDir = Math.floor(n / 2) + 1;
let numLinhas = Math.floor(n / 2) + 1;

for (posVertical = 1; posVertical <= numLinhas; posVertical++ , ladoEsq-- , ladoDir++) {
    for (linhaSaida = "", posHorizontal = 0; posHorizontal <= n; posHorizontal++) {
        if (posHorizontal == ladoEsq || posHorizontal == ladoDir || posVertical == numLinhas)
            linhaSaida += "*";
        else
            linhaSaida += " ";
    }
    console.log(linhaSaida);
}