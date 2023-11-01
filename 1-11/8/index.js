const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const alumnos = [];

function obtenerPromedio(notas) {
  const suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
}

function mostrarResultado() {
  console.log('----- Resultado -----');
  alumnos.forEach(alumno => {
    const promedio = obtenerPromedio(alumno.notas);
    console.log(`Alumno: ${alumno.nombre}`);
    console.log(`Promedio: ${promedio}`);
    console.log(promedio >= 7 ? 'APROBADO' : 'REPROBADO');
    console.log('---------------------');
  });
  rl.close();
}

function pedirNotas(alumno) {
  rl.question(`Ingrese las notas para ${alumno.nombre}: `, notasStr => {
    const notas = notasStr.split(' ').map(nota => parseFloat(nota));
    alumno.notas = notas;
    if (alumnos.length < 3) {
      pedirNombre();
    } else {
      mostrarResultado();
    }
  });
}

function pedirNombre() {
  rl.question('Ingrese el nombre del alumno: ', nombre => {
    const alumno = { nombre };
    alumnos.push(alumno);
    pedirNotas(alumno);
  });
}

console.log('----- Ingrese los datos de los alumnos -----');
pedirNombre();
