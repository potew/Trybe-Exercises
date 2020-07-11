//3- Faça o mesmo que antes, mas que imprima um triângulo retângulo invertido
let coluna, linha, posAsterisco, linhaSaida = "";
const n = 8;

for (coluna = 1, asterisco = n; coluna <= n; coluna++ , asterisco--) {
    for (linha = 1; linha <= n; linha++) {
        if (linha >= asterisco)
            linhaSaida += "*";
        else
            linhaSaida += " ";
        if (linha == n) {
            console.log(linhaSaida);
            linhaSaida = '';
        }
    }
}