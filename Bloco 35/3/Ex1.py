#  Exercício 1 Faça uma requisição ao site https://httpbin.org/encoding/utf8 e exiba seu conteúdo de forma legível.

import requests

responsa = requests.get('https://httpbin.org/encoding/utf8')

print(responsa.text)