const canalYT = "UskoKruM2010";

function sumar(n1, n2) {
    return n1 + n2;
}

function restar(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

// module.exports.canal = canalYT;
module.exports = {
    canal: canalYT,
    sumar: sumar,
    restar: restar,
    dividir: function (n1, n2) {
        return n1 / n2;
    },
    multiplicar: multiplicar
};