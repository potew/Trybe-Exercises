#  Exercício 2 Faça uma requisição ao recurso usuários da API do Github ( https://api.github.com/users ), exibindo o username e url de todos os usuários retornados.

import requests

respjson = requests.get('https://api.github.com/users').json()

for user in respjson:
  print(user['login'], user['url'])
