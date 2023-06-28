let form = document.querySelector(".div");
let h1 = document.getElementById("h1");


form.onsubmit = function(e){
    e.preventDefault();
    if(!form.reportValidity())
    {
        h1.style.visibility = 'visible';
        console.error("El formulario no puede enviarse debido a errores en el mismo")
        form.reportValidity();
    }
    else{
        h1.style.visibility = 'hidden';
        alert("Se enviara sin problemas");
    }
}
