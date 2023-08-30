const personas = ["fabricio", "fabricio", "maximo","maximiliano", "alan"];
const contadorNombres = personas.reduce((contador, nombre) => {
  if (contador[nombre]) {
    contador[nombre]++;
  } else {
    contador[nombre] = 1;
  }
  return contador;
}, {});

console.log(contadorNombres);