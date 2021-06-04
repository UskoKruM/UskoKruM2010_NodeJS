const fs = require('fs');

/*
fs.writeFile('data1.txt', 'UskoKruM2010 - Suscríbete!', (error) => {
    if (error) {
        console.log(`Error: ${error}`);
    }
});
*/

/*
fs.readFile('data1.txt', (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.log(`Error: ${error}`);
    }
});
*/

/*
fs.readFile('data1.txt', 'utf-8', (error, data) => {
    if (!error) {
        console.log(data);
    } else {
        console.log(`Error: ${error}`);
    }
});
*/

/*
fs.rename('data1.txt', 'dataCanal.txt', (error) => {
    if (!error) {
        console.log("¡Renombrado!");
    } else {
        console.log(`Error: ${error}`);
    }
});
*/

/*
fs.appendFile('dataCanal.txt', '\n¡Gracias por darle like a este video!', (error) => {
    if (!error) {
        console.log("¡Contenido agregado!");
    } else {
        console.log(`Error: ${error}`);
    }
});
*/

// fs.createReadStream('dataCanal.txt').pipe(fs.createWriteStream('dataCanal_bu.txt'));

/*
fs.unlink('dataCanal_bu.txt', (error) => {
    if (error) {
        console.log(`Error: ${error}`);
    }
});
*/

fs.readdir('./', (error, archivos) => {
    archivos.forEach(archivo => {
        console.log(archivo);
    });
});