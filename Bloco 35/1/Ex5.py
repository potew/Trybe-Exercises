# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

pareade = int(input("Qual a área a se pintar? "))
litros = pareade / 3

if litros % 18 == 0:
    latas = litros / 18
else: latas = litros // 18 + 1

tupla = (latas, latas * 80)
print("Serão gastos, respectivamente... (latas/litros de tinta)", tupla)
