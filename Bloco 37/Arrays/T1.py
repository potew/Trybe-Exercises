"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""
import sys


class Array:

    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        return self.data.pop(index)


# vamos inicializar e preencher uma estrutura de dados array
array = Array()
array.set(0, "André")
array.set(1, "Ana")
array.set(2, "Shirley")
array.set(3, "Miguel")

# para acessar um elemento do array, utilizamos seu índice
print(array.get(0))  # saída: André
print(array.get(2))  # saída: Shirley
print("-----")

# podemos iterar sobre seus elementos da seguinte maneira
index = 0
# enquanto há elementos no array
while index < len(array):
    # recupera o elemento através de um índice
    print("Index:", index, ", Nome:", array.get(index))
    index += 1

print("---Reinicializando-o---")
array = Array()
# sys.getsizeof retorna o tamanho da lista em bytes
array_memory_size = sys.getsizeof(array.data)
print(f'Tamanho da lista vazia: {array_memory_size}')

array.set(0, "Marcos")
array.set(1, "Patrícia")
# quando começamos as inserções o valor muda
array_memory_size = sys.getsizeof(array.data)
print(f'Tamanho da lista c/ 2 nomes: {array_memory_size}')
array.set(2, "Matheus")
array.set(3, "Giovana")
# como um espaço adicional é reservado o valor não é modificado
array_memory_size = sys.getsizeof(array.data)
print(f'Tamanho da lista c/ 4 nomes: {array_memory_size}')
# inserindo mais nomes...
array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print(f'Nom nom nom nom: {array_memory_size}')
array.remove(7)
print(array)
