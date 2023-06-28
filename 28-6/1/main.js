let input = document.getElementById("snk");
let boton = document.getElementById("ntr");
let img = document.getElementById("img");

boton.onclick = cargarImagen;

function cargarImagen(){
    if(input.value){
        img.style.visibility = 'visible'
        img.setAttribute("src",input.value)
        input.value = null;
    }
}