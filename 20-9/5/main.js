let url = {};
const tarjetasContainer = document.getElementById('tarjetas-container');

const obtenerDigimons = async (direccion) => {
  try {
    const response = await fetch(direccion ? direccion : 'https://www.digi-api.com/api/v1/digimon');
    const data = await response.json();
    url = data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

const mostrarDigimons = async (direccion) => {
  const digimons = await obtenerDigimons(direccion);
  tarjetasContainer.innerHTML = '';

  for (const digimon of digimons.content) {
    const tarjeta = document.createElement('div');
    tarjeta.innerHTML = `<img src="${digimon.image}" alt="Digimon Image"><h3>${digimon.name}</h3>`;
    tarjetasContainer.appendChild(tarjeta);
  }
};

const actualizarPagina = async (direccion) =>{
  await mostrarDigimons(direccion);
};

mostrarDigimons();
const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');
siguiente.addEventListener('click', ()=>actualizarPagina(url.pageable.nextPage));
anterior.addEventListener('click', ()=>actualizarPagina(url.pageable.previousPage));

