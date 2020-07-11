const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsWithFor(student));

// Com Object.values
console.log(listSkillsWithValues(student));

//Praticamente a mesma coisa acima com uma linha: console.log(Object.entries(student));

const paises = {
    'França': 'Paris',
    'Brasil': 'Brasilia',
    'Espanha': 'Madrid',
    'Portugual': 'Lisboa',
  };
  const pairKeyValue = Object.entries(paises);
  console.log(pairKeyValue);

  const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)