const readline = require("readline");
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r.question("Escriba 3 notas del alumno: ", (n) => {
    const numeros = n.split(' ');
    if (numeros.length != 3) {
        console.log('Tienen que ser 3 notas.')
        return r.close();
    }
    const doble = numeros.map(e => e*2);
    console.log('El doble de los números es:', doble);
    r.close();
})