#!/bin/bash

#4. Escreva um Shell Script que verifica se o caminho até um arquivo existe (“file path”). Se ele existir, imprima na tela a mensagem: "O caminho _ está habilitado!". Então, verifique se você tem permissão de escrita no arquivo. Se tiver, mostre a mensagem: "Você tem permissão para editar _". Caso contrário, mostre a mensagem: "Você NÃO foi autorizado a editar _". O _ nas mensagens deve ser substituído pelo (“file path”).

path="/home/andre/Downloads"

if [ -e $path ]
    then
        echo "O caminho $path estah habilitado!!"
        if [ -w $path ]
            then
                echo "Voce tem permissao para editar $path."
            else
                echo "Permissao negada. Contacte o administrador"
        fi
    else
        echo "Caminho $path inexistente.."
fi