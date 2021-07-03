const os = require('os');

console.log('Número de CPUs', os.cpus().length, os.totalmem());
console.log('Sistema operacional', os.type(), os.version());
