const lenguajes = ["Dart", "PHP", "JavaScript", "Python"];
let encontrado = false;

lenguajes.forEach((lenguaje) => {
    debugger;
    if (lenguaje === "PHP") {
        encontrado = true;
    }
    console.log(lenguaje);
});

console.log(encontrado);