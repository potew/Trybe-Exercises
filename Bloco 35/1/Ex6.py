# Exercício 6: Crie uma função que receba os três lados de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo", caso não seja possível formar um triângulo.

def isTriangle(l1, l2, l3):
    is_triangle = (
            l1 + l2 > l3 or
            l2 + l3 > l1 or
            l1 + l3 > l2
    )
    if not is_triangle:
        return "não é triângulo"
    elif l1 == l2 == l3:
        return "equilátero"
    elif l1 == l2 or l2 == l3 or l1 == l3:
        return "isósceles"
    else:
        return "escaleno"

l1 = int(input("Lado 1: "))
l2 = int(input("Lado 2: "))
l3 = int(input("Lado 3: "))

print(isTriangle(l1, l2, l3))
