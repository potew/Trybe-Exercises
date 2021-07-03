class Deque:
    # Primeiro iremos declarar o construtor da classe deque e a propriedade que indica a posição inicial dos elementos: 
    FIRST_ELEMENT = 0

    def __init__(self):
        self._data = []
        # Aqui ele está implemenado como uma lista

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(str(x) for x in self._data) + ")"

    def __clr__(self):
        self._data.clear()

    def __exists__(self, nummer):
        if nummer in self._data:
            return True
        else:
            return False

    # Métodos para inserir nas extremidades
    def push_front(self, value):
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        self._data.append(value)

    # Mesma coisa para remover
    def pop_front(self):
        if self._data:
            return self._data.pop(self.FIRST_ELEMENT)
        return None

    def pop_back(self):
        if self._data:
            return self._data.pop()
        return None

    # E também para ler
    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]
        return None

    def peek_back(self):
        if self._data:
            return self._data[len(self)-1]
        return None


if __name__ == "__main__":
    deque = Deque()
    elements_1 = [6, 7, 8, 9, 10]
    elements_2 = [1, 2, 3, 4, 5]

    for elem in elements_1:
        deque.push_front(elem)

    for elem in elements_2:
        deque.push_back(elem)

    print(deque)  # Deque(10, 9, 8, 7, 6, 1, 2, 3, 4, 5)
    print(deque.__len__())  # imprime 10

    print(deque.pop_front())  # imprime 10, pois ele retorna o número retirado
    print(deque.pop_back())  # imprime 5, pois ele retorna o número retirado

    print(deque)  # imprime Deque(9, 8, 7, 6, 1, 2, 3, 4)
    print(deque.__len__())  # imprime 8
    print(deque.__exists__(8))  # imprime True?!
    print(deque.__exists__(12))  # imprime Farse?!

    print(deque.peek_front())  # imprime 9
    print(deque.peek_back())  # imprime 4

    deque.__clr__()  # imprime nada
    print(deque)  # imprime o neque limpo
