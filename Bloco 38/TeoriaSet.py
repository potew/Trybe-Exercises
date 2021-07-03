# Vamos construir uma classe Conjunto especializada em guardar números inteiros até 1000 (o que é considerado pequeno). Para tanto, vamos representar nossos dados como listas de booleanos. Para cada exercício lembre-se de considerar maneiras eficientes e, ao mesmo tempo, legíveis de se escrever o código. Obs.: assim como na aula anterior, isso é uma gambiarra para fins didáticos, já que o Python implementa o set usando hash por baixo dos panos, não um dicionário de booleanos.


class Conjunto:
    def __init__(self):
        self.set = [False for i in range(1001)]
        self.last_element = 0
    # Obs.: o set é palavra reservada no Python para indicar que é do tipo conjunto
    # Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;
    def add(self, item):
        self.set[item] = True
        if(item) > self.last_element:
            self.last_element = item

    # Caso tenhamos que imprimir na tela o nosso objeto, o comando print(conjunto) não irá funcionar. O que será impresso é o endereço de memória onde o objeto está guardado, e não é isso que queremos. Para que o comando print funcione, precisamos que a nossa classe tenha um método chamado __str__ e é o que faremos agora:
    def __str__(self):
        string = '{'
        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "
        string += "}"
        return string

    # Crie um método com a assinatura abaixo que retorne se um elemento faz parte ou não do conjunto:
    # retorno: True, caso o elemento faça parte. False, caso o elemento não faça parte.

    def is_in(self, item):
        return self.set[item]

    # Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:
    # retorno: outro objeto Conjunto com união do próprio objeto com o conjuntoB
    def union(self, conjuntoB):
        unionSet = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                unionSet.add(index)

        return unionSet

    # Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:
    def intersection(self, conjuntoB):
        interSect = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                interSect.add(index)

        return interSect


# 1. Na main (dentro de: if __name__ == "__main__": ), instancie um objeto do tipo Conjunto e adicione os valores.


if __name__ == '__main__':
    conjuncto = Conjunto()
    for item in [0, 10, 100, 1000]:
        conjuncto.add(item)

print(conjuncto)
print(Conjunto.is_in(conjuncto, 10))
print(Conjunto.is_in(conjuncto, 100))
print(Conjunto.is_in(conjuncto, 230))
# Na main, instancie dois objetos do tipo Conjunto. Preencha o primeiro com os valores anteriores, e o segundo, com valores de 1 a 20;

conj2 = Conjunto()
for item in range(1, 21):
    conj2.add(item)

print(Conjunto.union(conjuncto, conj2))
print(Conjunto.intersection(conjuncto, conj2))
