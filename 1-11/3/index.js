const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Escribe un nombre y una cantidad: ', (texto) => {
    const [nombre, numero] = texto.split(' ');
    for(let i = 0; i<= numero; i++) console.log(nombre);
    rl.close();
});
