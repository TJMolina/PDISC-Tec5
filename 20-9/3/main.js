const tarjetasContainer = document.getElementById('tarjetas-container');

async function obtenerDigimons() {
  try {
    const response = await fetch('https://www.digi-api.com/api/v1/digimon');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

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

async function mostrarDigimons() {
  const digimons = await obtenerDigimons();
  console.log(digimons);
  for (digimon of digimons.content) {
    crearTarjeta(digimon);
  }
}

mostrarDigimons();