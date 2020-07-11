#!/bin/bash

#11. Modifique o Shell Script do exercício anterior para receber o diretório onde estão os arquivos e a extensão dos arquivos que devem ser modificados como argumento (ou parâmetro). Adicione também uma mensagem mostrando como eram o como vão ficar o nome dos arquivos a serem modificados.

diretorio=$1
ext=$2

cd $diretorio
lista=`ls *.$ext`

for arq in $lista
do
    echo "Nome antes da alteracao: $arq ; Depois: `date +%F$arq`"
    #mv $arq `date +%F$arq`
done