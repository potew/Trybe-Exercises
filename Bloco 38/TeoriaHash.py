# Para armazenar os dados do usuário de forma agregada vamos criar a classe Employee:
class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


# Considerando que nossa chave são inteiros, vamos usar a operação mod 10, ou resto da divisão inteira por 10, para definirmos o índice onde o dado vai ser armazenado. Cada número que entra vai resultar em um endereço de 0 a 9. O valor 10 foi escolhido por não
# ser muito grande. Tanto a operação mod como o valor 10 são escolhas ilustrativas e são apenas um exemplo.


class HashMap:
    def get_address(self, id_num):
        return id_num % 10

# Como nossa hash function resulta em endereços de 0 a 9, uma lista com 10 posições é suficiente. Vamos inicializar a lista já do tamanho que precisamos, preenchida com None. Não podemos preencher com um valor numérico, como por exemplo -1, pois isso causaria ambiguidade: se você quiser guardar o valor -1, como vamos saber se isso é o valor ou um indicativo de que o bucket está vazio? A lista buckets é um atributo da classe HashMap. [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] <- buckets preenchidos inicialmente como None e seus respectvos índices. None é a melhor forma de indicar que o balde está vazio
    def __init__(self):
        self._buckets = [None for i in range(10)]

# Para povoar nossa hash, recebemos o objeto, computamos o seu address, a partir da chave numérica, e armazenamos no local adequado.
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        # self._buckets[address] = employee <= era assim, alterado para evitar colisão. Só que agora temos que buscar o elemento na lista para obtê-lo. Ver o for da linha 34 a 38
        self._buckets[address].append(employee)

# Para acessar o dado de interesse, passamos a chave. A classe identifica o índice, onde a referência para aquele objeto está armazenada, e retorna o valor que estiver no campo name.
    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

# Para consultar se uma determinada chave existe dentro da sua hash map, basta calcular o address. Além disso, vamos certificar de que o conteúdo da lista buckets não é None.
    def has(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
            else:
                return None
        # return self._buckets[address] is not None <= era assim. Descomente para o Exemplo 2 voltar a funcionar.

# Referente ao exercício 2 abaixo
    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_name


# Implementando os métodos para alterar os valores
# 1. Instanciando a classe HashMap e usando os objetos Employee para povoá-la.


if __name__ == '__main__':
    employees = [(14, "Nome1"), (23, "Nome2"), (10, "Nome3"), (9, "Nome4")]
    registry = HashMap()

    for id, name in employees:
        registry.insert(Employee(id, name))

    # Imprimindo o nome do registro de id no. 23:
    print(registry.get_value(23))

    # 2. Criando e usando um método para alterar o nome do registro de id 10:
    print(registry.get_value(10))
    registry.update_value(10, 'Andrulas')
    print(registry.get_value(10))
    # Obs.: não funciona com listas nos buckets. Ver linha 39!!
