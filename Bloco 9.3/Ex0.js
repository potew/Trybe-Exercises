const nationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;
const emoji = ({ lastName, favoritEmoji = '😴' }) => `${lastName}'s favorite emoji is ${favoritEmoji}`;

const person = {
    firstName: "João",
    lastName: "Souza"
};

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian",
    favoritEmoji: '😁'
};

console.log(nationality(otherPerson)); // Ivan is Russian
console.log(nationality(person));
console.log(emoji(person));
console.log(emoji(otherPerson));

//Do jeito que está, a chamada nationality(person) retorna João is undefined. 😭
//Ajuste a arrow function nationality para que a chamada de nationality(person) retorne João is Brazilian.