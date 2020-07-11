let salBruto = 3000, salBase, salLiquido, iNSS, iR;
if (salBruto <= 1556.94 && salBruto > 0)
    salBase = 0.92*salBruto;
    else if (salBruto <= 2594.92)
    salBase = 0.91*salBruto;
    else if (salBruto <= 5189.82)
    salBase = 0.89*salBruto;
    else if (salBruto > 5189.82)
    salBase = salBruto - 570.88;
    else
        console.log("Você paga pra trabalhar??");
iNSS = salBruto - salBase;

if (salBase <= 1903.98)
    iR = 0;
    else if (salBase <= 2826.65)
    iR = 0.075*salBase + 142.80;
    else if (salBase <= 3751.05)
    iR = 0.15*salBase + 354.80;
    else if (salBase <= 4664.68)
    iR = 0.225*salBase + 636.13;
    else if (salBase > 4664.68)
    iR = 0.275*salBase + 869.36;
    else
        console.log("Você paga pra trabalhar??");
salLiquido = salBase - iR;
console.log(salLiquido);