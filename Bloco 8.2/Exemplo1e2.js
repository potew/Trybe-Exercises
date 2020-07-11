// P1 - Agora, para praticar, crie uma função que receba três parâmetros. Sendo eles: um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const amorzinho = {
    firstName: 'Dianna',
    age: 34,
    job: 'Nurse',
  };

function combine (obj,chave,valor) {
    obj[chave] = valor;
    return obj;
}

console.log(combine(amorzinho, 'lastName', 'Oliveira'));

// P2 - Tente criar uma função que exiba as habilidades do objeto student. Cada, habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”.

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

exiba = (objeto) => {
    const chaves = Object.keys(objeto);
    for (let i in chaves)
        console.log(`${chaves[i]} - Nível: ${objeto[chaves[i]]}`);
}
console.log(`Estudante 1: `); exiba(student1);
console.log(`Estudante 2: `); exiba(student2);