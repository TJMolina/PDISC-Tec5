fetch("https://reqres.in/api/users")
.then(response=>response.json())
.then(response=>console.log(response));

(async ()=>{
    let respuesta = await fetch("https://reqres.in/api/users");
    let resultado = await respuesta.json();
    console.log(resultado);
})();