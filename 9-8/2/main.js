fetch("https://reqres.in/api/users")
    .then(resultado => resultado.json())
    .then(resultado => {
        const persona = resultado.data;
        let nombres = document.createElement("ul")
        let apellidos = document.createElement("ul")

        for (let nombre of persona) {
            nombres.innerHTML += `<li>${nombre.first_name}</li>`
            apellidos.innerHTML += `<li>${nombre.last_name}</li>`
        }
        document.body.appendChild(nombres);
        document.body.appendChild(apellidos);

    })
    .catch + (error => console.error(error));
