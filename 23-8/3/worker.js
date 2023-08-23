let paginaActual;
onmessage = (evento)=>{
    paginaActual = evento.data;
    cargarPagina(paginaActual);
}
async function cargarPagina(pagina) {
    try {
        const solicitud = await fetch(`https://reqres.in/api/users/?page=${pagina}`);
        const contenido = await solicitud.json();
        const todo = contenido.data;
        const usuarios = contenido.data.map((objeto)=>({
            nombre: `${objeto.first_name}`,
            apellido: `${objeto.last_name}`,
            avatar: `${objeto.avatar}`,
            correo: `${objeto.email}`
        }));
        postMessage(usuarios);

    } catch (e) {
        console.error(`Se produjo un error: ${e.message}`);
    }
}
