const dividir = (num1, num2) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (parseInt(num2) === 0) {
                rej('No se puede dividir entre 0...');
            } else {
                const resultado = num1 / num2;
                res(resultado);
            }
        }, 3000);
    });
};

module.exports = {
    dividir
}