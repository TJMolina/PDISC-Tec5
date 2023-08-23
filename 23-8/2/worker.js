postMessage("Worker cargado")
onmessage = (event)=>{
    console.log("Se recibio un mensaje desde el worker principal")
}
for(let k = 0; k < 1_000; k++){
    console.log("HOLA")
}