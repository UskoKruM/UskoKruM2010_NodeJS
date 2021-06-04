/*
console.log(__filename);
console.log(__dirname);

console.count("Node");
console.log("Hola");
console.count("Node");
console.table({
    a: 1,
    b: 2
});

console.log("Nivel N° 1");
console.group();
console.log("Nivel N° 2");
console.group();
console.log("Nivel N° 3");
console.log("Más contenido del nivel 3");
console.groupEnd();
console.log("Regresamos al nivel 2");
console.groupEnd();
console.log("Regresamos al nivel 1");
*/

let valor = 0;

const saludar = () => {
    console.log("Hola Mundo!");
    valor++;
}

/*
// setTimeout(saludar, 2000);
let timer = setTimeout(saludar, 2000);

clearTimeout(timer);
*/

let intervalo = setInterval(() => {
    saludar();
    if (valor === 5) {
        clearInterval(intervalo);
    }
}, 1000);