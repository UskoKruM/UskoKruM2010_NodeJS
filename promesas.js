// res => resolve (Resuelto) / rej => reject (Rechazado)
/*
const miPromesa = new Promise((res, rej) => {
    // res('Éxito en la llamada a la promesa');
    rej('Ocurrió un error en el servidor...');
});

miPromesa.then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(`Error: ${error}`);
});
*/

const moduloPromesa = require('./misModulos/promesa.js');

const miPromesa = moduloPromesa.dividir(15, 5);
miPromesa.then((data) => {
    console.log(data);
}, (error) => {
    console.log(`Error: ${error}`);
});