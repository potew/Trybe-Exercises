//6-(Bônus) Faça um programa que diz se um número definido numa variável é primo ou não.

const numero = 7;

for (let fator = 2; fator < numero;)
    if (numero % fator > 0) {
        fator++;
        if (fator == numero)
            console.log(numero + " é um número primo!!");
        else
            console.log("Fator atual: " + fator);
    }
    else {
        console.log("Quociente: " + numero / fator);
        console.log("Não é primo. Saíndo...");
        break;
    }