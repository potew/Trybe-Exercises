/*5-Crie uma função que recebe um array de inteiros e retorna o inteiro que mais vezes ocorrer.
    Array de teste: [2, 3, 2, 5, 8, 2, 3];.
    Valor esperado no retorno da função: 2.
*/
const teste = [8, 3, 8, 5, 8, 2, 3];

function maisOcorrencias(array) {
    let i = 0, j = 0,
        tamArray = array.length;
    numAtual = array[j],                //Declaração de variáveis e alguns valores iniciais compatíveis com a array analisada
        numMaior = array[j],
        contNumAtual = 0,
        contNumMaior = 0;
    for (j = 0; j < tamArray; j++) {        //O loop externo/maior serve para percorrer a array procurando cada número por vez
        for (i = 0; i < tamArray; i++)      //O loop interno/menor percorre a array comparando este número com os valores da array
            if (array[i] == array[j])       //Caso esses dois sejam iguais, ele...
                contNumAtual++;             //...acrescenta uma unidade às ocorrências totais desse número
        if (contNumAtual > contNumMaior) {  //Se a contagem encontrada for maior que a maior regstrada até o momento...
            contNumMaior = contNumAtual;    //...ele a iguala,,,
            numMaior = array[j];            //...e salva qual valor correposnde a essa quantidade.
        }
        contNumAtual = 0;                   //Zera este valor para passar para a próxima iteração
    }
    return numMaior;                        //Por fim retorna o valor correspondente à maior contagem encontrada.
}

console.log("O número que aparece mais nessa lista é o " + maisOcorrencias(teste));     //Chamada da função