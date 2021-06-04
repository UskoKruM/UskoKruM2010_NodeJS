const os = require('os');

let cpu = os.cpus();
// console.log(cpu);

let sistema = os.platform();
// console.log(sistema);

let usuario = os.hostname();
console.log(usuario);

let arquitectura = os.arch();
console.log(arquitectura);