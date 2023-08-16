function proA (arreglo, funcion) {
    return funcion(arreglo)
}

function calP(arreglo)
{
    return arreglo.reduce((accu,item)=>accu+item,0)/arreglo.length;
}
const num=[ 1,2,3,4,5];
console.log("El resultado es: "+proA(num,calP));
