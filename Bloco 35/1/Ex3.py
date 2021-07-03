# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

n = int(input("Qual o tamanho a gerar? "))

i, j = 0, 0
linha = ''

while (i < n):
    linha += '*'
    i += 1

while (j < n):
    print(linha)
    j += 1

#  Deu ruim assim
# while (j < n):
#     while (i < n):
#         print ('*', end="")
#         i += 1
#     j += 1
