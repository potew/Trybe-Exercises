//2- Para o segundo exercício, faça o mesmo que antes, mas que imprime-se um triângulo retângulo com 5 asteriscos de base.
let coluna, linha;
const n = 8;

for (coluna = 1, linhaSaida = ""; coluna <= n; coluna++) {
    linhaSaida = linhaSaida + "*";
    for (linha = 1; linha <= coluna; linha++)
        if (linha = coluna)
            console.log(linhaSaida);
}