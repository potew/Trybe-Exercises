from Ex1 import fizzbuzz

def test_fizz_for_multiple_of_three():
  'Para um número múltiplo de 3 a função deve retornar Fizz nas casas múltiplas de 3 e não nas demais'
  assert fizzbuzz(9)[0] != 'Fizz'
  assert fizzbuzz(9)[1] != 'Fizz'
  assert fizzbuzz(9)[2] == 'Fizz'
  assert fizzbuzz(9)[3] != 'Fizz'
  assert fizzbuzz(9)[4] != 'Fizz'
  assert fizzbuzz(9)[5] == 'Fizz'

def test_buzz_for_multiple_of_five():
  'Para um número múltiplo de 3 a função deve retornar Buzz nas casas múltiplas de 5 e não nas demais'
  assert fizzbuzz(10)[0] != 'Buzz'
  assert fizzbuzz(10)[1] != 'Buzz'
  assert fizzbuzz(10)[2] != 'Buzz'
  assert fizzbuzz(10)[3] != 'Buzz'
  assert fizzbuzz(10)[4] == 'Buzz'
  assert fizzbuzz(10)[5] != 'Buzz'