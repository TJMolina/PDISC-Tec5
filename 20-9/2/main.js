const personajesList = document.getElementById('personajes-list');

async function obtenerPersonajes() {
  try {
    const response = await fetch('https://swapi.dev/api/people');
    const data = await response.json();
    return data.results;
  } catch(error) {
    console.error(error);
  }
}
function crearItemDeLista(personaje) {
  const itemDeLista = document.createElement('li');
  const itemDeListaLink = document.createElement('a');
  itemDeListaLink.href = personaje.url;
  itemDeListaLink.textContent = personaje.name;
  itemDeListaLink.target = "_blank";
  itemDeLista.appendChild(itemDeListaLink);
  return itemDeLista;
}

async function mostrarPersonajes() {
  const personajes = await obtenerPersonajes();
  personajes.forEach(personaje => {
    const itemDeLista = crearItemDeLista(personaje);
    personajesList.appendChild(itemDeLista);
  });
}

mostrarPersonajes();