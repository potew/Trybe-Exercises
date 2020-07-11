#!/bin/bash

#8. Modifique o Shell Script do exercício anterior para aceitar uma quantidade ilimitada de arquivos ou diretórios como argumento (ou parâmetro).

for argm in $*
do
    if [ -e $argm ]
        then
            if [ -d $argm ]
            then
                echo "O caminho é uma pasta! Segue a listagem de arquivos..."
                ls -l $argm
            elif [ -f $argm ]
            then
                echo "O caminho corresponde a um arquivo!!"
                ls -l $argm
                else
                    echo "ArquiVazio..."
            fi
        else
            echo "Caminho invahlido, try again :P"
    fi
done