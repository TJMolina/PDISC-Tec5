const v= [56,88,21, -10, 26];

const doble = v.map (numero => numero * 2);
console.log (doble);

const pares = v.filter(numero => numero % 2 ==0);
console.log(pares);


const sumatoria =v.reduce((sumatoria, numero) => {
return sumatoria + numero;
},0);
console.log(usiario);

console.log ("v contiene 89?: ", v.include(89));
console.log ("v contiene -1?: ", v.include(-11));
console.log(doble);

const sonTodosPares =v.every(numero => numero %2 ==0);
console.log ("¿ son todos los elementos pares?", sonTodosPares);

const esAlgunoImpa = v.every(numero => numero %2 ==1);
console.log ("¿ algunos de los elementos es impar?", esAlgunoImpa);

const sumatoriaPostImpares =v.reduce((sumatoria, numero,indice) => {
if (indice%2 ==1)
return sumatoria + numero;
},0);


const readLine = require("readLine");
const r = readLine.createInterface({
imput: process.stdin,
output:process.stdout,

})

console.log(process);

r.question("por favor escribi tu nombre: ", (nombre) => {
    console.log("hola $ {nombre} !" );
    r.close();

})


