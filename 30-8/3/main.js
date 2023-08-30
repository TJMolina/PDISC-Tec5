const alumnos = [
    {
        nombre_apellido: "Pepe Luis",
        promedio: 9.66
    },
    {
        nombre_apellido: "Juan Topo",
        promedio: 3.66       
    },
    // Agrega más objetos de alumnos aquí
];

const resultado = alumnos.reduce((contador, alumno) => {
  if (alumno.promedio >= 6) {
    contador.aprobados++;
  } else {
    contador.desaprobados++;
  }
  return contador;
}, { aprobados: 0, desaprobados: 0 });

console.log(resultado);
