const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
adicionaTurno = (objeto,chave,valor) => {
  objeto[chave] = valor;
  return objeto;
}
//console.log (adicionaTurno(lesson2,'turno','manhã'));

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
listaKeys = (objeto) => {
  return Object.keys(objeto);
}
//console.log(listaKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.
tamanho = (objeto) => {
  return Object.entries(objeto).length;
}
//console.log(tamanho(lesson2));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
listaValores = (objeto) => {
  return Object.values(objeto);
}
//console.log(listaValores(lesson3));

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
const allLessons = {};
Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});
//console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
totalAlunos = (objetoGigante) => {
  return (objetoGigante.lesson1.numeroEstudantes + 
  objetoGigante.lesson2.numeroEstudantes + 
  objetoGigante.lesson3.numeroEstudantes);
}
//console.log(totalAlunos(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
pegaValorPorNumero = (objeto, chave) => {
  return Object.entries(objeto)[chave][1];
}
//console.log(pegaValorPorNumero(lesson1, 0));

// 8. Crie uma função que verifique se o par (chave / valor) existem na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
verificaPar = (objeto, chave, valor) => {
  if (objeto[chave] == valor)
    return true;
  else
    return false;
}

console.log(verificaPar(lesson3, 'turno', 'noite'));
console.log(verificaPar(lesson3, 'materia', 'Maria Clara'));