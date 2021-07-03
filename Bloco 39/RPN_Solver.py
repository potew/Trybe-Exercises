from Stack import Pilha


def solve_expression(expr):
    stack = Pilha()
    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token == '+':
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '-':
            # Subtract operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            # Multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == '/':
            # Quocient operation
            result = stack.pop() / stack.pop()
            stack.push(result)
        else:
            # Numeric value
            stack.push(int(token))

    return stack.pop()


# Ex.: ((35 + 15) * 8) / 10
print(solve_expression("35 15 + 8 * 10 /"))
