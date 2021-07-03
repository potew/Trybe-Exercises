# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

lista = [2, 4, 8, 16, 32, 64, 128, 256]
soma = 0

for elem in lista:
    soma += elem

print(soma / len(lista))
