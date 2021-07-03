# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

nomes = ['Ana', 'José', 'Lucas', 'Nádia', 'Fernanda', 'Erivanildo', 'Cairo', 'Joana']
maior = ''

for nome in nomes:
    if len(nome) > len(maior):
        maior = nome
    print(f'Maior nome até aqui: {maior}')