const selectElement = document.getElementById("dias");
const opciones = selectElement.querySelectorAll("option");
const valores = [];

opciones.forEach((opcion) => {
    valores.push(opcion.value);
});

console.log(valores);