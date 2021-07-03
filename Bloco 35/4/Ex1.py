# Exercício 1: Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções :

# Números divisíveis por 3 devem aparecer como 'Fizz' ao invés do número;
# Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número';
# Ex: 3 -> [1, 2, "Fizz"] .

# limit = int(input('Digite número: '))

def fizzbuzz(limit):
  
  i = 1
  li = []

  while (i <= limit):
    if i % 3 == 0 and i % 5 == 0:
      li.append('FizzBuzz')
      i += 1
    elif i % 3 == 0:
      li.append('Fizz')
      i += 1
    elif i % 5 == 0:
      li.append('Buzz')
      i += 1
    else:
      li.append(i)
      i += 1

  return(li)

# fizzbuzz(limit)
