let input = document.getElementById("snk");
let boton = document.getElementById("ntr");
let img = document.getElementById("img");

boton.onclick = cargarImagen;
document.addEventListener("keydown",(e)=>{if(e.key == "Enter")cargarImagen()})

function cargarImagen(){
    if(input.value){
        img.setAttribute("src",input.value)
        input.value = '';
    }else{
        img.style.visibility = 'visible'
        img.setAttribute("src","amon.png")
    }
}
