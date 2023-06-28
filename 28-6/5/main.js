let input = document.getElementById("snk");
let img = document.getElementById("img");
let div = document.getElementById("div")
div.onsubmit = cargarImagen;
document.addEventListener("keydown", (e) => { if (e.key == "Enter") cargarImagen() })
function cargarImagen(e) {
    e.preventDefault();
    if (input.value) {
        img.setAttribute("src", input.value)
        input.value = '';
    } else {
        img.style.visibility = 'visible'
        img.setAttribute("src", "amon.png")
    }
}


function zoom(event) {
    event.preventDefault();
    if (event.deltaY < 0) {
        scale += 0.5;
    } else if (scale > 1) scale -= 0.5;

    img.style.transform = `scale(${scale})`;
}

let scale = 1;
img.onwheel = zoom;