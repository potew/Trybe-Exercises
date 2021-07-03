# Exercício 1: Crie um algoritmo não recursivo para contar quantos números
# pares existem em uma sequência numérica (1 a n).
def contaParTrad(lista):
    contador = 0
    for num in lista:
        if num % 2 == 0:
            contador += 1
    return contador


# Exercício 2: Transforme o algoritmo criado acima em recursivo.
def contaParRec(lista, evenCount):
    if len(lista) == 0:  # Condição de parada
        return evenCount
    else:
        if lista[0] % 2 == 0:
            evenCount += 1
        return contaParRec(lista[1:], evenCount)


# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior
# número inteiro.
def encontraMaiorRec(lista, maior):
    if len(lista) == 0:  # Condição de parada
        return maior
    else:
        if lista[0] > maior:
            maior = lista[0]
        return encontraMaiorRec(lista[1:], maior)


# Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor
# comum (mdc) de dois inteiros. Obs.: MDC(n1, n2) = MDC(n2, resto)
def mdc(n1, n2):
    if (n2 == 0):  # Condição de parada
        return n1
    else:
        return mdc(n2, n1 % n2)

# Ex.5: Escreva um algoritmo recursivo que identifica se um número é primo.


lishta = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 11, 10]
a = 15035
b = 3500

# print('Resposta da 1:', contaParTrad(lishta))
# print('Resposta da 2:', contaParRec(lishta, 0))
# print('Resposta da 3:', encontraMaiorRec(lishta, lishta[0]))
print(f'MDC entre {a} e {b}:', mdc(a, b))
