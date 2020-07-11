#!/bin/bash

#9. Escreva um Shell Script que receba um diretório como argumento (ou parâmetro). Se o argumento não for um diretório, mostre a mensagem: "O argumento _ não é um diretório!". Se o argumento for um diretório, conte quantos arquivos existem nele e mostre a seguinte mensagem: "O _ tem _ arquivos.", em que você deve substituir os "_" pelo diretório e a quantidade de arquivos nele, respectivamente.

#$1 se refere ao (primeiro) argumento passado

if [ $# -lt 1 ]
    then
        echo "Nenhum argumento passado?!? Saindo..."
        exit
fi

if [ -d $1 ]
    then
        contagem=`ls $1 -l|wc -l`
        echo "O diretohrio $1 tem $contagem arquivos"
    else
        echo "O argumento $1 não é um diretório!"
fi