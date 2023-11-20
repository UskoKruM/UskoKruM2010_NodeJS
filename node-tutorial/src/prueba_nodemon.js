import { sumar, restar } from "./utils/funcionesMatematicas.js";
import miConstante from "./utils/consts.js";

const lenguajes = ["PHP", "C#", "JavaScript", "Dart", "Python"];
let encontrado = false;

lenguajes.forEach((lenguaje) => {
    if (lenguaje === "PHP") {
        encontrado = true;
    }
    console.log(lenguaje);
});

console.log(encontrado);

console.log(miConstante);

console.log(sumar(15, 29));
console.log(restar(31, 10));
