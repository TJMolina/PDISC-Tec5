const busqueda = document.getElementById('busqueda');
const buscar = document.getElementById('buscar');
const resultados = document.getElementById('resultados');
const loader = document.getElementById('loader');
async function buscarPersonajes() {
  // Construir la URL de búsqueda utilizando el valor de la caja de texto
  const url = `https://swapi.dev/api/people/?search=${busqueda.value}`;

  try {
    loader.classList.remove('esconder');
    // Hacer una solicitud a la API de Star Wars utilizando fetch()
    const response = await fetch(url);
    const data = await response.json();

    // Limpiar la lista de resultados
    resultados.innerHTML = '';

    // Iterar sobre los resultados y agregar cada uno a la lista
    data.results.forEach(personaje => {
      const elemento = document.createElement('li');
      elemento.textContent = personaje.name;
      resultados.appendChild(elemento);
    });
    loader.classList.add('esconder');

  } catch (error) {
    console.log(error);
  }
}

buscar.addEventListener('click', buscarPersonajes);