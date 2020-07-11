//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim"
};

/*Imprima no console uma mensagem de boas vindas para a personagem acima, incluindo seu nome.
Valor esperado no console: Bem - vinda, Margarida */

console.log("Bem-vinda, " + info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim” e, em seguida, imprima o objeto no console.

for (indice in info)
    console.log(indice, info[indice]);

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”.

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

for (indice in info, info2)
    if (info[indice] == info2[indice])
        console.log("Ambos são!!");

    else
        console.log(info[indice] + " e " + info2[indice]);
