# Exercício 1 Em um software monitor, que verifica a resiliência de outro
# software, precisamos saber qual o tempo máximo que um software permaneceu
# sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema
# e verificamos se está ok. Supondo um array que contenha os estados coletados
# por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem
# instabilidades.

valores_coletados_1 = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0]
valores_coletados_2 = [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0]


def max_stability(p_list):
    rally = 0
    max = 0
    for iter in p_list:
        if iter == 1:
            rally += 1  # v Ternario!!! v
            max = rally if rally >= max else max
        else:
            rally = 0
    return 'Máximo:', max


print(max_stability(valores_coletados_1))
print(max_stability(valores_coletados_2))
