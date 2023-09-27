let url;
const tarjetasContainer = document.getElementById('tarjetas-container');
async function obtenerDigimons(direccion) {
  try {
    const response = await direccion? direccion:fetch('https://www.digi-api.com/api/v1/digimon');
    url = response;
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
anterior.addEventListener('click',mostrarDigimons(url.nextPge));
siguiente.addEventListener('click',mostrarDigimons(url.previousPage));
function crearTarjeta(digimon) {
  const tarjeta = document.createElement('div');
  const imagen = document.createElement('img');
  const nombre = document.createElement('h3');

  imagen.src = digimon.image;
  nombre.textContent = digimon.name;

  tarjeta.appendChild(imagen);
  tarjeta.appendChild(nombre);
  tarjetasContainer.appendChild(tarjeta);
}

async function mostrarDigimons(direccion) {
  const digimons = await obtenerDigimons(direccion);
  for (digimon of digimons.content) {
    crearTarjeta(digimon);
  }
}

mostrarDigimons();
