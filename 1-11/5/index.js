const readline = require("readline");
const r = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

r.question("Escriba 10 numeros: ", (n) =>{
    const numeros = n.split(' ');
    if(numeros.length<10) {
        console.log('Tienen que ser 10 numeros.')
        return r.close();
    }
    const promedio = numeros.reduce((acumulado, numero, indice, array) => {
      acumulado += parseInt(numero);
    
      if (indice === array.length - 1) {
        return acumulado / array.length;
      } else {
        return acumulado;
      }
    }, 0);
    console.log('El promedio de los números es:', promedio);
    r.close();
})