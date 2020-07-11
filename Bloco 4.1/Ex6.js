let nomePeca = "RaInHa", movPeca;

switch (nomePeca.toLowerCase())  {
    case 'peao':
        console.log("2/1 casas p/ frente na primeira e 1 para frente nas demais");
        break;
    case 'bispo':
        console.log("Diagonais livres");
        break;
    case 'cavalo':
        console.log("2 casas para frente e 1 para o lado (Em L)");
        break;
    case 'torre':
        console.log("Verticais livres");
        break;
    case 'rei':
        console.log("Qualquer casa adjacente");
        break;
    case 'rainha':
        console.log("Livre para qualquer lado");
        break;
    default:
        console.log(nomePNorm);
}

