# Exercício 1: Dado um array com os seguintes elementos ["zebra", "macaco", "elefante", "arara", "javali"], após duas iterações utilizando bubble sort, como estaria este array?
# ["macaco", "elefante", "arara", "javali", "zebra"] 1st
# ["elefante", "arara", "javali", "macaco", "zebra"] 2nd

# Exercício 2: Demonstre o passo a passo do processo de mistura de um array sendo ordenado, utilizando merge sort. Comece o passo a passo a partir da linha:  7 3    5 4    6 8    2 1

# Começa direto nos grupos de 2: 3 7    45    68    12
# Depois:                       3 4 5 7     1 2 6 8
# E depois:                       1 2 3 4 5 6 7 8

# Exercício 3: Execute os algoritmos de ordenação por seleção e inserção, para as entradas de dados ordenadas, inversamente ordenadas e aleatórias, em seguida, compare-os. Faça testes para entradas de tamanho 10.000, 100.000, 1.000.000.
# Gere a entrada da seguinte maneira:

from random import shuffle
from time import perf_counter

ordenados = list(range(10000))
inversamente_ordenados = list(reversed(range(100)))
aleatorios = ordenados[:]  # copia dos ordenados
shuffle(aleatorios)  # embaralha eles
print('Lista aleatohria:', aleatorios)

# A ordenação por seleção ( selection sort em inglês), divide o array em duas partes, uma já ordenada e outra de itens a serem ordenados. Em seguida, selecionaremos o menor elemento na lista não ordenada e o incluiremos na lista ordenada. Isto será feito continuamente até que nossa lista de elementos não ordenados se esgote, e logo teremos uma lista com os itens ordenados.

def selection_sort(array):
    # como um algoritmo de força bruta
    # percorre a estrutura exaustivamente
    for i in range(len(array)):
        minimum = i

        # itera sobre os elementos não ordenados
        for j in range(i + 1, len(array)):
            # seleciona o menor valor
            if array[j] < array[minimum]:
                minimum = j

        # após encontrar o menor valor
        # ao invés de criar um novo array (aumenta complexidade de espaço)
        # realizamos a substituição entre o menor elemento
        # e a posição i que corresponde ao primeiro elemento não ordenado
        # que consequentemente passará a ser o último ordenado
        array[minimum], array[i] = array[i], array[minimum]

    return array

# A ordenação por inserção (insertion sort) tem esse nome por inserir um elemento de cada vez em sua posição correta. Fazendo uma analogia a um jogo de cartas, onde sua "mão" esteja ordenada, é como se a cada nova carta recebida fossemos movendo ela até achar a posição correta e a inserimos ali, e faremos isso sucessivamente até que não tenha novas cartas e por consequência, nossa mão esteja ordenada. É mais eficiente que a ordenação por seleção e também considerada mais simples.

def insertion_sort(array):
    # itera sobre cada valor do array
    for i in range(len(array)):
        current_value = array[i]
        current_position = i
        # enquanto o valor da posição for menor que os elementos a sua esquerda
        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            # move as posições para a direita
            array[current_position] = array[current_position - 1]
            current_position = current_position - 1
        # colocamos o elemento em sua nova posição
        array[current_position] = current_value
    return array


# Para medir o tempo de execução de um algoritmo

sel_start_time = perf_counter()
selection_sort(ordenados)
selection_sort(inversamente_ordenados)
selection_sort(aleatorios)
sel_end_time = perf_counter()
print(f"Executou em {sel_end_time - sel_start_time} segundos c/ selection.")

ins_start_time = perf_counter()
insertion_sort(ordenados)
insertion_sort(inversamente_ordenados)
insertion_sort(aleatorios)
ins_end_time = perf_counter()
print(f"Executou em {ins_end_time - ins_start_time} segundos c/ insertion.")

# Concluindo, o insertion foi bem mais rápido... quanto maior o array, maior ainda a diferença
# Exercício 4 Compare o tempo de execução do algoritmo merge_sort e bubble_sort para uma entrada de 10.000 valores aleatórios. Explique através de análise de complexidade o que ocorre.
# R.: como o algoritmo de selecionar precisa percorrer o array inteiro para encontrar o número correspondente, ele possui uma complexidade que aumenta quadraticamente O(n²). No caso do de inserção, não é necessário fazer toda essa iteração, aumentando logaritmicamente; Ele percorre apenas até encontrar o primeiro elemento que satisfaça a condição de ser menor e modifica o próprio array, ao contrário do outro algoritmo que cria um novo.
