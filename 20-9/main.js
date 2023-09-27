fetch('https://regres.in/api/users')
.then((respuesta) => respuesta.json())
.then((datos) => {
    const usuarios = datos.data;
    /* MESSI */
    const personas = usuarios.map((usuario) => {
        return{
            nombre: usuario.first_name,
            apellido: usuario.last_name,
            imagen: usuario.avatar
        }
    })
})
.catch((error) => console.error(error));
