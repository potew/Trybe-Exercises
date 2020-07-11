//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprime na tela um quadrado feito de asteriscos de lado de tamanho n.
let linhaSaida = "",
  coluna;
const n = 8;

for (coluna = 1; coluna <= 8; coluna++)
  linhaSaida = linhaSaida + "*";

for (coluna = 1; coluna <= 8; coluna++)
  console.log(linhaSaida);
