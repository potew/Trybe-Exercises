// 1. Crie uma função que receba um número e retorne seu fatorial.
const fatorial = (numero) => {
    for (var mult = 1 ; numero > 1 ; numero--)
        mult *= numero;
        return mult;
};
//console.log(fatorial(7));
// Bônus: tente fazer de forma recursiva.
const fatorialV2 = numero => numero < 2 ? 1 : numero * (fatorialV2(numero - 1));
console.log(fatorialV2(5));

//  2. Crie uma função que receba uma frase e retorne qual a maior palavra.
const maiorPalavra = (frase) => {
    let maiorPalavra = '';
    const arrayPalavras = frase.split(' ');
    arrayPalavras.map(palavra => (palavra.length > maiorPalavra.length) ? maiorPalavra = palavra : palavra);
    return `A maior palavra da frase é ${maiorPalavra}`;
}
console.log(maiorPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu. Algo inconstitucional, provavelmente.'));

/*  4.  Crie um código JavaScript com a seguinte especificação:
Não se esqueça de usar template literals
Função 1: Escreva uma função que vai receber uma string como primeiro parâmetro. Sua função deverá procurar pela letra x e substituir pela string que você passou como primeiro parâmetro. Sua função deve retornar essa nova string.
Exemplo da string:
“Tryber x aqui!
Tudo bem?“.
Um array com escopo global, que é o escopo do arquivo JS nesse caso, contendo cinco strings com suas principais skills.
Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
Exemplo:
“Tryber x aqui!
Tudo bem?
Minhas cinco principais habilidades são:
    JavaScript;
    HTML; …
    #goTrybe”.*/

const skills = ['Organização','Curiosidade','Redes','Suporte','Sistemas'];

const geraFrase = (nome) => {return(`Tryber ${nome} aqui!
Tudo bem?
Minhas cinco principais habilidades são:
${skills.sort()}.
#goTrybe`);}

console.log(geraFrase('André'));