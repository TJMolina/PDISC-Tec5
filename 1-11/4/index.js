const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Escribe un nombre: ', (texto) => {
    console.log(texto, ":", texto.length)
    rl.close();
});