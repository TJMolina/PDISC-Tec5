const readline = require("readline");
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question("Escriba 5 palabras: ", (n) => {
    const palabras = n.split(' ');
    if (palabras.length != 5) {
        console.log('Tienen que ser 5 palabras.')
        return r.close();
    }
    const arrayStrings = palabras;

    const palabraMasLarga = arrayStrings.reduce((palabraActual, palabraSiguiente) => {
        if (palabraSiguiente.length > palabraActual.length) {
            return palabraSiguiente;
        } else {
            return palabraActual;
        }
    });

    console.log('La palabra más larga es:', palabraMasLarga);
    r.close();
})