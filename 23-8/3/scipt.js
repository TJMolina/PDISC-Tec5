const w = new Worker("worker.js")
let paginaActual = 1;
w.postMessage(paginaActual);
const btnant = document.querySelector(".ant");
const btnsig = document.querySelector(".sig");
const contenedor = document.querySelector(".contenedor");

w.onmessage = (e)=>crearUsuarios(e.data);

function crearUsuarios(usuarios) {
    contenedor.innerHTML = "";
    usuarios.forEach(user => {
        const userbox = document.createElement("div");
        userbox.className = "user-box";
        userbox.innerHTML = `
            <div class="user-img"><img src="${user.avatar}" alt="Avatar"></div>
            <div class="user-inf">
                <h3>${user.nombre} ${user.apellido}</h3>
                ${user.correo}
            </div>`;
        contenedor.appendChild(userbox);
    });
}

function cambiarPagina(pagina) {
    paginaActual = pagina;
    btnsig.classList.toggle("ocultar");
    btnant.classList.toggle("ocultar");
    
}

btnsig.onclick = () => {w.postMessage(2);cambiarPagina(2)}
btnant.onclick = () => {w.postMessage(1);cambiarPagina(1)}
