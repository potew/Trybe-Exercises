#!/bin/bash

 read -p "Digite uma pasta: " nomePasta

if cd $nomePasta
    then
        echo 'Diretorio encontrado encontrado com sucesso na pasta'
    else
        echo 'Not found'
fi

if [ $USER = andre ] && [ -x Arqui.vo ]
    then
        echo "O usuario eh o $USER e tem permissao sobre o Arqui.vo"
    elif [$USER = andre]
        then
        echo "O usuario eh o $USER"
    else
        echo "Algo deu errado... try again!!"
fi