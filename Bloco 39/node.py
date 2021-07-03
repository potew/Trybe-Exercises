class Node:
    # Primeiro iremos declarar o construtor da classe Node.
    # Em seguida, declararemos a propriedade que indica o
    # próximo elemento (next) como tendo o valor, por default, None:
    def __init__(self, value):
        self.value = value
        self.next = None

    def __str__(self):
        return f"Node(value={self.value}, next={self.next})"
