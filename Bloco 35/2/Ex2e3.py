# 2. Jogo da palavra embaralhada. Desenvolva um jogo em que o usuário tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

import random

fileName = 'Nomes.txt'
tentativa = ''

def fileToList(fileName):
  nameList = []
  nomes = open(fileName, 'r')
  for nome in nomes:
    nameList.append(nome.replace('\n', ''))
  nomes.close()
  return nameList

def selectAndShuffle(nameList):
  selectedName = random.choice(nameList)
  scrambled = ''.join(random.sample(selectedName, len(selectedName)))
  return selectedName, scrambled

def checkAnswer(input, answer):
  if(input == answer):
    print('CertAresposta')
  else:
    print('Sorry, try again')

if __name__ == '__main__':
  answer, scrambled = selectAndShuffle(fileToList(fileName))
  respostauser = input(f'Qual nome vc acha que é {scrambled}?\n')
  checkAnswer(respostauser, answer)
