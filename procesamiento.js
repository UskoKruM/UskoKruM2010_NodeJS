const fs = require('fs');

// Procesamiento asíncrono:
/*
console.log("Inicio");
fs.readFile('dataCanal.txt', 'utf-8', (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.log(`Error: ${error}`);
    }
});
console.log("Fin");
*/

// Procesamiento síncrono:
console.log("Inicio");
const miData = fs.readFileSync('dataCanal.txt', 'utf-8');
console.log(miData);
console.log("Fin");