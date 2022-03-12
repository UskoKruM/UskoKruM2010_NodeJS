const funcionesMatematicas = require("./utils/funcionesMatematicas");

const lenguajes = ["PHP", "C#", "JavaScript", "Dart", "Python"];
let encontrado = false;

lenguajes.forEach((lenguaje) => {
    if (lenguaje === "PHP") {
        encontrado = true;
    }
    console.log(lenguaje);
});

console.log(encontrado);

console.log(funcionesMatematicas.sumar(15, 29));
