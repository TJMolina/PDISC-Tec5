//IIFE
//(async()=>{
//     try{
//         const solicitud = await fetch(`https://reqres.in/api/users/?page=${paginaActual}`)
//         const contenido = await solicitud.json()
//         console.log(contenido)
//         const usuarios = contenido.data
//         console.log(usuarios)
//         crearusuario(usuarios)
//     }
//     catch(e){
//         console.error(`Se produjo un error: ${e.message}`)
//     }
// })();

const contenedor = document.querySelector(".contenedor");
const btnant = document.querySelector(".ant");
const btnsig = document.querySelector(".sig");
let paginaActual = 1;

async function cargarPagina(pagina) {
    try {
        const solicitud = await fetch(`https://reqres.in/api/users/?page=${pagina}`);
        const contenido = await solicitud.json();
        const usuarios = contenido.data;
        crearUsuarios(usuarios);
    } catch (e) {
        console.error(`Se produjo un error: ${e.message}`);
    }
}

function crearUsuarios(usuarios) {
    contenedor.innerHTML = "";
    usuarios.forEach(user => {
        const userbox = document.createElement("div");
        userbox.className = "user-box";
        userbox.innerHTML = `
            <div class="user-img"><img src="${user.avatar}" alt="Avatar"></div>
            <div class="user-inf">
                <h3>${user.first_name} ${user.last_name}</h3>
                ${user.email}
            </div>`;
        contenedor.appendChild(userbox);
    });
}

function cambiarPagina(pagina) {
    paginaActual = pagina;
    cargarPagina(paginaActual);
    btnsig.classList.toggle("ocultar");
    btnant.classList.toggle("ocultar");
}

btnsig.onclick = () => cambiarPagina(2);
btnant.onclick = () => cambiarPagina(1);

cargarPagina(paginaActual);