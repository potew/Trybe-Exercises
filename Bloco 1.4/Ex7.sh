#!/bin/bash

#7. Modifique o Shell Script do exercício anterior de forma que ele aceite o nome do arquivo ou diretório como argumento (ou parâmetro) em vez de perguntar ao usuário. Pesquise nos recursos adicionais como utilizar os parâmetros (ou argumentos) no Shell Script.

#Desta vez, ele pega o primeiro e unico argumento que deverah conter a URL.

if [ -e $1 ]
    then
        if [ -d $1 ]
        then
            echo "O caminho é uma pasta! Segue a listagem de arquivos..."
            ls -l $1
        elif [ -f $1 ]
        then
            echo "O caminho corresponde a um arquivo!!"
            ls -l $1
            else
                echo "ArquiVazio..."
        fi
    else
        echo "Caminho invahlido, try again :P"
fi