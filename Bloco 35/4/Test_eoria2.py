import pytest
from Teoria import divide

def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
      # Isso é o mesmo que fazer um try:
      divide(2, 0)
      # except ZeroDivisionError:
      # AssertionError: ...

# Utilizamos a função raises da pytest, que verifica se a exceção ocorreu. Caso contrário, ela lança um AssertionError, indicando que o teste não passou. Podemos verificar também se o texto retornado na exceção é o esperado, através do parâmetro match, que pode receber uma expressão regular. No exemplo, temos uma divisão por zero, que lança a exceção esperada, e o teste passa com sucesso.