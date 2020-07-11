#!/bin/bash

#6. Escreva um Shell Script que peça ao usuário um nome de arquivo ou diretório e, em seguida, imprima na tela se ele é um arquivo comum, um diretório, ou outro tipo de arquivo. Depois, faça um comando de listagem no arquivo/diretório usando a opção de listagem detalhada.
clear
read -p "Insira o nome de um arquivo ou caminho de pasta: " arquivo

if [ -e $arquivo ]
    then
        if [ -d $arquivo ]
        then
            echo "O caminho é uma pasta! Segue a listagem de arquivos..."
            ls -l $arquivo
        elif [ -f $arquivo ]
        then
            echo "O caminho corresponde a um arquivo!!"
            ls -l $arquivo
            else
                echo "ArquiVazio..."
        fi
    else
        echo "Caminho invahlido, try again :P"
fi