#  Exercício 3 Dado um array de números inteiros que representam produtos
# em um e-commerce. Verifique quantos produtos formam boas combinações,
# considerando que uma boa combinação é quando um produto é igual ao
# outro e seu índice é maior que o anterior. Esta combinação pode ser
# utilizada para modificar os produtos de uma página.

productos = [3, 8, 4, 0, 6, 7, 1, 8, 5, 3, 0, 2, 3, 1, 7, 5, 4, 9, 6]


def combinaciones(array):
    iter = 0
    total_matches = 0
    while iter < len(array):
        for item in array[:iter]:
            if array[iter] == item:
                total_matches += 1
                print('Índice', iter, 'Número', item)
        iter += 1
    print('Total de combinações:', total_matches)


combinaciones(productos)
