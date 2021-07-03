from T1 import Array

#  Vamos ver um exemplo de como poderíamos implementar um array dimensional.
# Para isso, vamos criar um novo arquivo, no mesmo diretório do arquivo que
# estávamos utilizando anteriormente, apenas para não termos que criar outro
# ambiente isolado.


class Matrix(Array):

    def get(self, row, column):
        return self.data[row][column]

    def set(self, row, column, value):
        """Caso a linha não exista, uma nova linha
        será criada."""
        try:
            self.data[row].insert(column, value)
        except IndexError:
            self.data.insert(row, [value])

    def remove(self, row, column):
        # removeremos o item, retornando-o
        return self.data[row].pop(column)


array = Matrix()
array.set(0, 0, "Marcos")
array.set(0, 1, 6)
array.set(0, 2, 9)

array.set(1, 0, "Patrícia")
array.set(1, 1, 9)
array.set(1, 2, 6)

print(array)

# remove o índice 2, da primeira linha
# valor: 9
array.remove(0, 2)

print(array)

# Dado um array com os valores
array = [1, 2, 4, 5, 6]
# e outro com os valores
other_array = [7, 8, 9]
# podemos junta-los em um novo utilizando o operador +
new_array = array + other_array
# um novo array é criado e o conteúdo de ambos é copiado
# para a nova estrutura

# Uma outra operação interessante é a busca
# pois podemos buscar um elemento utilizando o operador in
# É equivalente a iterar sobre cada elemento e verificar a igualdade
5 in new_array
# essa busca pode demorar um pouco já
# que se não encontrar pode acabar percorrendo toda a estrutura

# temos o count para contar quantas vezes um elemento aparece
print("Numero de vezes que o 1 se repete:", [1, 2, 1, 2, 1, 4, 5, 6].count(1))

# array de duas dimensões
matrix = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

# acessando um índice
print(matrix[1][1])  # saída: 5
# deletando um elemento á partir do índice
del matrix[2][2]
print(matrix)
