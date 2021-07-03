# 1. Dado um array de números de tamanho n, escreva um algoritmo que retorna
# true se há no array um número duplicado e false caso contrário. Analise a
# solução abaixo e diga qual é a ordem de complexidade desse algoritmo para
# o melhor caso, pior caso e caso médio.

def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if(previous_number == number):
            return True
            previous_number = number

    return False


arei = [3, 7, 5, 1, 9, 4, 7, 5, 2, 9, 6, 0, 3, 6, 9, 76, 2, 1]
print(contains_duplicate(arei))

# Resposta: a operação de ordenar possui grau do tipo logaritmico - O(n * log(n)). Dps,
# para percorrer o array, seria, na pior das hipóteses - ou seja, de fato - linear O(n).
