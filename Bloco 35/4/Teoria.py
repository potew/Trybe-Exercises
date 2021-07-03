# Funções a serem testadad nos outros arquivos

# Para o teste automatizado - saída esperada

def is_odd(number):
    'Retorna True se um número é verdadeiro, senão False.'
    return number % 2 != 0

# Para o teste de falhas

def divide(a_number, other_number):
    "Retorna a divisão de a_number por other_number"
    return a_number / other_number

# Para o teste (4) de dublês (pokémon)

import json
def retrieve_pokemons_by_type(type, reader):
    # lê o conteudo de reader e o transforma de json
    # para dicionário
    pokemons = json.load(reader)["results"]
    # filtra somente os pokemons do tipo escolhido
    pokemons_by_type = [
        pokemon for pokemon in pokemons if type in pokemon["type"]
    ]
    return pokemons_by_type

#  Um segundo cenário é onde a função espera o nome de um arquivo e a abertura do mesmo acontece dentro da função. 

def retrieve_pokemons_by_type_file(type, filepath):
    with open(filepath) as file:
        pokemons = json.load(file)["results"]
        pokemons_by_type = [
            pokemon for pokemon in pokemons if type in pokemon["type"]
        ]
        return pokemons_by_type