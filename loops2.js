//15/8/24
//1.En una clase, tienes un array con las notas de los alumnos. Escribe una función contarAprobados que reciba este array y cuente cuántos alumnos aprobaron (nota mayor o igual a 6). Usa un bucle for para recorrer el array, continúe para saltar las notas menores a 6 y break para detener el conteo si encuentras una nota igual a 10 (porque es la nota máxima). Muestra el resultado en la consola.
let notasAlumnos = [5, 7, 8, 10, 4, 6, 2, 1, 3];
function contarAprobados(notas) {
  let aprobados = 0;
  for (let i = 0; i < notas.length; i = i + 1) {
    if (notas[i] === 10) {
      aprobados = aprobados + 1;
      break;
    }
    if (notas[i] <= 6) {
      continue;
    }
    aprobados = aprobados + 1;
  }
  return `Alumnos aprobados: ${aprobados}`;
}

console.log(contarAprobados(notasAlumnos));

//2.Un canal de TV quiere saber si un programa específico está en la programación del día. Escribe una función buscarPrograma que reciba un array con la lista de programas del día y un nombre de programa para buscar. Usa un bucle for para recorrer el array y break para detener la búsqueda una vez que encuentres el programa. Muestra en la consola si el programa fue encontrado o no.
let programasArgentina = ["TN", "Gran Hermano", "MasterChef", "A24"];
function buscarPrograma(programas, nombre) {
  let encontrarPrograma = false;
  for (let i = 0; i < programas.length; i = i + 1) {
    if (programas[i] === nombre) {
      encontrarPrograma = true;
      break;
    }
  }
  if (encontrarPrograma == true) {
    return `${nombre} esta en la programacion`;
  } else {
    return `${nombre} no esta en la programacion`;
  }
}
console.log(buscarPrograma(programasArgentina, "TN"));

//3.En una clase, un profesor quiere saber cuántos alumnos obtuvieron notas menores a 4 para ofrecerles clases de apoyo. Escribe una función contarNotasBajas que reciba un array con las notas y cuente cuántas son menores a 4. Usa for para recorrer el array y continue para saltar las notas que no sean menores a 4
function contarNotasBajas(notas) {
  let notasBajas = 0;
  for (let i = 0; i < notas.length; i = i + 1) {
    if (notas[i] > 4) {
      continue;
    }
    notasBajas = notasBajas + 1;
  }
  return `Alumnos que necesitan clases de apoyo: ${notasBajas}`;
}
console.log(contarNotasBajas(notasAlumnos));

//4.Tienes una lista de programas en un canal de televisión, y quieres seleccionar tus favoritos, pero solo los primeros tres que te gustan. Escribe una función seleccionarFavoritos que reciba un array con la lista de programas y un array con tus programas favoritos. Usa for para recorrer la lista, continue para saltar los que no están en tus favoritos, y break para detenerte una vez que hayas encontrado tres programas favoritos.
let programas = [
  "Nickelodeon",
  "DisneyChannel",
  "DisneyXD",
  "Tooncast",
  "Cartoon Network",
];
let programasFavoritos = ["Tooncast", "Nickelodeon", "DisneyXD"];

function seleccionarFavoritos(programas, programasFavoritos) {
  let favoritos = [];
  let fav = 0;

  for (let i = 0; i < programas.length; i = i + 1) {
    if (!programasFavoritos.includes(programas[i])) {
      continue;
    }
    favoritos.push(programas[i]);
    fav = fav + 1;
    if (fav === 3) {
      break;
    }
  }

  return `Programas favoritos : ${favoritos}`;
}

console.log(seleccionarFavoritos(programas, programasFavoritos));

//5.En una escuela, el profesor quiere evaluar el desempeño de los alumnos. Escribe una función evaluarDesempeño que reciba un array con las notas de los alumnos y muestre en la consola si cada uno tiene un "Desempeño Excelente" (nota mayor o igual a 9). Usa for para recorrer el array y continue para saltar los que no cumplan con el criterio.
function evaluarDesempeño(notas) {
  for (let i = 0; i < notas.length; i = i + 1) {
    if (notas[i] < 9) {
      continue;
    } else {
      console.log(`El alumno con ${notas[i]} tiene un Desempeño Excelente`);
    }
  }
}
evaluarDesempeño(notasAlumnos);

//6.Tienes un objeto alumno que contiene un array de materias, donde cada materia es un objeto con el nombre y la nota. Escribe una función filtrarAprobadas que recorra el array de materias, filtre aquellas con nota mayor o igual a 6 y las guarde en un nuevo array aprobadas. Usa for para recorrer las materias, continue para saltar las materias desaprobadas, y break si el alumno ya ha aprobado 5 materias. Muestra el array aprobadas en la consola.
//
const alumno = {
  materias: [
    { nombre: "Matematica", nota: 5 },
    { nombre: "Gestion PP", nota: 7 },
    { nombre: "Ciudadania y trabajo", nota: 8 },
    { nombre: "Ciencia y Tecnologia", nota: 6 },
    { nombre: "Administracion de redes", nota: 9 },
    { nombre: "Programacion sobre redes", nota: 9 },
    { nombre: "Ingles", nota: 4 },
  ],
};
function filtrarAprobadas(alumno) {
  let aprobadas = [];
  let cont = 0;
  for (let i = 0; i < alumno.materias.length; i = i + 1) {
    let materia = alumno.materias[i];
    if (materia.nota < 6) {
      continue;
    }
    aprobadas.push(materia);
    cont = cont + 1;
    if (cont >= 5) {
      break;
    }
  }
  return aprobadas;
}
console.log(filtrarAprobadas(alumno));

//7.Un canal de TV tiene una programación donde cada programa tiene una calificación. Escribe una función buscarMejorPrograma que reciba un array de objetos programas, cada uno con el nombre y la calificación, y encuentre el programa con la mejor calificación. Usa for para recorrer el array, continue para saltar los programas con calificaciones bajas (menos de 7), y break si encuentras un programa con una calificación perfecta de 10. Muestra el nombre del mejor programa en la consola.
let programasTv = [
  { nombre: "The Walking Dead", calificacion: 9 },
  { nombre: "El encargado", calificacion: 7 },
  { nombre: "Dexter", calificacion: 10 },
  { nombre: "Los Simpsons", calificacion: 6 },
];

function buscarMejorPrograma(programas) {
  let mejorPrograma = "";
  let mejorCalificacion = 0;

  for (let i = 0; i < programas.length; i = i + 1) {
    let programa = programas[i];
    if (programa.calificacion < 7) {
      continue;
    }
    if (programa.calificacion === 10) {
      mejorPrograma = programa;
      break;
    }
    if (programa.calificacion > mejorCalificacion) {
      mejorCalificacion = programa.calificacion;
      mejorPrograma = programa;
    }
  }
  if (mejorPrograma) {
    return `Mejor programa: ${mejorPrograma.nombre}`;
  } else {
    return "No hay buenos programas";
  }
}
console.log(buscarMejorPrograma(programasTv));

//8.En una escuela, algunas materias incluyen clases prácticas. Escribe una función que reciba un objeto alumno con un array de materias, donde cada materia tiene un nombre y un booleano tienePracticas que indica si incluye prácticas. Usa for para recorrer las materias, continue para saltar las materias sin prácticas, y break si encuentras 3 materias con prácticas. Muestra en la consola cuántas materias con prácticas encontró.
const alumno2 = {
  materias: [
    { nombre: "Matematica", practicas: true },
    { nombre: "Gestion PP", practicas: false },
    { nombre: "Ciudadania y trabajo", practicas: false },
    { nombre: "Ciencia y Tecnologia", practicas: true },
    { nombre: "Administracion de redes", practicas: false },
    { nombre: "Programacion sobre redes", practicas: false },
    { nombre: "Ingles", practicas: false },
  ],
};
function contarMateriasPracticas(alumno){
  let contador = 0;
  for (let i = 0; i < alumno.materias.length; i = i + 1) {
    let materia = alumno.materias[i];
    if (!materia.practicas) {
      continue;
    }
    contador = contador + 1;
    if (contador === 3) {
      break;
    }
  }
  return(`Materias con prácticas: ${contador}`);
}
console.log(contarMateriasPracticas(alumno2))

//9.Tienes una lista de canales de TV argentinos, y quieres saber si uno de tus canales favoritos está en esa lista. Escribe una función buscarCanalFavorito que reciba un array de canales y un array de favoritos. Usa for para recorrer los canales, continue para saltar los que no están en la lista de favoritos, y break si encuentras uno de tus canales favoritos. Muestra en la consola el nombre del canal encontrado o un mensaje indicando que no está en la lista.
let arrayCanales = ["TN", "Encuentro", "C5N", "Telefe", "A24"];
let canalesFavoritos = ["C5N", "Telefe", "Netflix"];
function buscarCanalFavorito(canales, favoritos) {
    for (let i = 0; i < canales.length; i =i + 1) {
        let canal = canales[i];
        if (!favoritos.includes(canal)) {
            continue;
        }
        return(`Canal favorito: ${canal}`);
    }
    return 'no se encontraron canales favoritos'
}
console.log(buscarCanalFavorito(arrayCanales, canalesFavoritos))


