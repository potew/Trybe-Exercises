/* (Difícil) Faça um programa que recebe uma string em algarismos romanos e retorna o número que a string representa. E atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!

Dicas:
A função .split("") transforma uma string em um array de caracteres, em que cada elemento do array é uma letra.
Que tal criar um objeto que associa cada letra a um numeral para fácil consulta?
Atenção! Quando você tem um número pequeno à direita de um número grande, eles devem ser somados. Exemplo: XI = 10 + 1 = 11. No entanto, se o número pequeno está à esquerda de um número maior que ele, ele deve ser subtraído. Exemplo: IX = 10 - 1 = 9.

O valor de cada numeral romano é:
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000;                               */

let stringRomano = "MCMXCII", arrayRomano = [0], numDecimal = 0, i, numEsq, numDir;

//Inicialmente, um laço que associa cada dígito romano da string de entrada (stringRomano) a seu respectivo decimal, jogando-o num array (arrayRomano). No final, imprime esse array para fins de depuração

for (i = 0; i <= stringRomano.length; i++) {
    switch (true) {
        case (stringRomano[i] == "I"):
            arrayRomano[i] = 1;
            break;
        case (stringRomano[i] == "V"):
            arrayRomano[i] = 5;
            break;
        case (stringRomano[i] == "X"):
            arrayRomano[i] = 10;
            break;
        case (stringRomano[i] == "L"):
            arrayRomano[i] = 50;
            break;
        case (stringRomano[i] == "C"):
            arrayRomano[i] = 100;
            break;
        case (stringRomano[i] == "D"):
            arrayRomano[i] = 500;
            break;
        case (stringRomano[i] == "M"):
            arrayRomano[i] = 1000;
            break;
        default:
            arrayRomano[i] = 0;
    }
}
console.log("Número romano: " + stringRomano);
console.log(arrayRomano);

//O segundo laço analisa o array em blocos de 2 dígitos, fazendo a soma na variável numDec (decimal) de acordo com a regra dos números romanos. O pulo do gato se dá nos casos em que um algarismo menor aparece antes de outro maior (ex.: IX é 9, XL é 40 etc). Nessas situações, ver a linha 55.

for (i = 0; i < arrayRomano.length; i += 2) {
    numEsq = parseInt(arrayRomano[i]);
    numDir = parseInt(arrayRomano[i + 1]);
    if (numEsq >= numDir && (numDir >= arrayRomano[i + 2]))
        numDecimal = numDecimal + Math.abs(numDir + numEsq);
    else
        numDecimal = numDecimal + Math.abs(numDir - numEsq);
    console.log(numDecimal);
}
//Obs.: há um bug que retorna NaN em alguns casos, por isso estou retornando o número a cada soma. O último valor válido corresponderá ao decimal correto.