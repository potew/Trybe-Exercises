PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    '''Calculate the area of square.'''
    return side * side


def rectangle(length, width):
    '''Calculate the area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate the area of circle.'''
    return PI * radius * radius

# Exibe apenas se executado diretamente no console, não quando for chamado por outra função por exemplo
if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))