// 3. O código abaixo está em JavaScript.
// Calcule sua ordem de complexidade para um array de tamanho n.

const numbers = [0,1,2,3,4,5,6,7,8,9]
numbers.map(n => n*n)

// Também é linear - O(n), já que todos os elementos serão percorridos

// 4. E para este?
const numbers = [0,1,2,3,4,5,6,7,8,9]
numbers.map(n => n*n)
       .filter(n => n%2 === 0)
       .reduce((acc, n) => acc + n)

// Também é linear. Como fazem operações em série, seria O(3*n) que é o mesmo que O(n) mesmo
