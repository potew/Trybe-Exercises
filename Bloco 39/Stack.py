# Para fixar o conteúdo das funções básicas de uma pilha, vamos criar uma classe Stack e aplicar nela as operações que acabamos de ver. Primeiro iremos declarar a classe chamada Stack no arquivo stack.py . Em seguida, vamos declarar o construtor para termos uma pilha vazia e duas propriedades que serão úteis para implementar as funcionalidades da pilha. A primeira propriedade nos retorna o tamanho da pilha e a segunda propriedade nos indica se a pilha esta vazia.
# Como usamos uma lista por baixo dos panos para implementar a pilha, a complexidade é O(n) ao invés de O(1)!!

class Pilha():
    def __init__(self):
        self._data = list()
        self.min = None

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

# Após adicionar as funções auxiliares, vamos adicionar as operações de push
# (empilhar valor(es)) e pop (remover itens do topo da pilha).
# Com esses métodos já poderemos manipular valores na pilha.
# Tem também o peek, que só lê o item.

    def push(self, value):
        self._data.append(value)

    def pop(self):
        # if self.is_empty:
        #     return None

        # Lembrando que -1 se refere ao último elemento da pilha.
        # Ou seja, o valor do topo da pilha
        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None
        value = self._data[-1]
        return value

    # Limpa tudo!!
    def clear(self):
        self._data.clear()

# Por fim, o método __str__ que faz a impressão de todos os elementos que estão empilhados. Do primeiro ao último item inserido (da parte de baixo da pilha até o topo).

    def __str__(self):
        str_items = ""
        for i in range(self.size()):
            value = self._data[i]
            str_items += str(value)
            if i + 1 < self.size():
                str_items += ", "

        return "Stack[" + str_items + "]"


if __name__ == "__main__":
    elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    content_stack = Pilha()

    for elem in elements:
        content_stack.push(elem)

    print('Stack:', content_stack)
    # saída: Stack(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    print('Size:', content_stack.size())
    # saída: 10

    print('Peek:', content_stack.peek())
    # saída: 10
    print('Pop:', content_stack.pop())
    # saída: 10 tb, pois a função retorna o elemento que está sendo retirado

    print('Peek:', content_stack.peek())
    # saída: 9, o elemento que ficou no topo da pilha
    print('Size:', content_stack.size())
    # saída: 9

    content_stack.clear()
    # saída disso seria None, pois esta função não retorna nada!
    print('Size:', content_stack.size())
    # saída: 0
