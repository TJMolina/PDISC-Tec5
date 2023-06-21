let form = document.getElementById("form");
let texto;

form.addEventListener("submit", leer);

function leer(e) {
    let tipo = document.getElementById("tipe1");
    let nombre = document.getElementById("nom1");
    let id = document.getElementById("id1");
    let etiqueta = document.getElementById("eti1");

    if (form.reportValidity()) {
        e.preventDefault();
        if (etiqueta.value && id.value) {
            ingresarlabel(etiqueta, id, nombre);
        }
        else if(etiqueta.value){
            alert("Ingresar id si quiere label.");
            return;
        }ingresarinput(tipo, nombre, id);
    }

}

function ingresarlabel(etiqueta, id) {
    let labl = document.createElement("label");
    labl.setAttribute("for",id.value);
    labl.innerHTML = etiqueta.value + ":"
    document.body.appendChild(labl);
}

function ingresarinput(tipo, nombre, id) {
    let inp = document.createElement("input");
    inp.type = tipo.value;
    inp.name = nombre.value;
    inp.id = id.value;
    document.body.appendChild(inp);
}