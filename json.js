/*
const fs = require('fs');

let data = fs.readFileSync('./data/personas.json');
// console.log(data);
let personas = JSON.parse(data).personas;
console.log(personas);
console.log(typeof (personas));
*/

/*
- require es una función sincrónica y se llama solo una vez, lo que significa que las llamadas reciben 
un resultado en caché. Si el archivo está actualizado, no puede volver a leerlo con este método.
- Su archivo debe tener la extensión '.json', por lo que no puede ser tan flexible. Sin la extensión 
adecuada, require no trata el archivo como un archivo JSON.
*/

/*
let jsonData = require('./data/personas.json');
console.log(jsonData);
console.log(typeof(jsonData));
*/

const fs = require('fs');

let data = {
    "cursos": [{
        "codigo": "924813",
        "nombre": "Lenguaje"
    }, {
        "codigo": "824912",
        "nombre": "Matemática"
    }, {
        "codigo": "567132",
        "nombre": "Química"
    }, {
        "codigo": "392014",
        "nombre": "Programación"
    }]
};

let jsonData = JSON.stringify(data);
console.log(jsonData);
console.log(typeof (jsonData));

fs.writeFile('./data/cursos.json', jsonData, (error) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log("Archivo JSON generado correctamente");
    }
});