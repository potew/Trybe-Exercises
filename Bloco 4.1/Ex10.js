let custo = 14.23, valor = 26.91, lucro;
if (custo < 0 || valor < 0)
    console.log("Valores de entrada inválidos. Saindo...");
else
{   
    lucro = (valor - (1.2*custo)) * 1000;
    console.log("R$ " + lucro);
}