#!/bin/bash

#5. Escreva um Shell Script que imprime as palavras "shell", "script", "usando", "estrutura", "repetição", "for", "terminal" na tela, uma palavra por linha. Tente fazer isso usando o menor número de comandos possível.

lista='shell script usando estrutura de repeticao for terminal'

for nome in $lista
do
    echo $nome
done