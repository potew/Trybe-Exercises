# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que lê todas essas informações e filtre somente as pessoas que estão aprovadas, escrevendo seus nomes em outro arquivo. A nota miníma para aprovação é 6.

try:
  notas = open("NotasT3.txt", "r")
  aprovados = open("AprovadosT3.txt", "w")
except OSError:
  print('Arquivo inexistente')
else:
  for reg in notas:
    if int(reg.split(' ')[1]) >= 6:
      aprovados.writelines(reg)
finally:
  notas.close()
  aprovados.close()
