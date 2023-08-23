const w = new Worker("worker.js");
//enviar datos al worker
w.postMessage("hola worker, soy tu padre")

//al recibir datos del worker
w.onmessage = (event)=>{
    console.log("Se recibio un mensaje desde el worker.")
}