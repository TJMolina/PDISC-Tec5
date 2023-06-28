let input = document.getElementById("snk");
let img = document.getElementById("img");
let div = document.getElementById("div")
div.onsubmit = cargarImagen;
document.addEventListener("keydown",(e)=>{if(e.key == "Enter")cargarImagen()})
function cargarImagen(e){
    e.preventDefault();
    if(input.value){
        img.setAttribute("src",input.value)
        input.value = '';
    }else{
        img.style.visibility = 'visible'
        img.setAttribute("src","amon.png")
    }
}
