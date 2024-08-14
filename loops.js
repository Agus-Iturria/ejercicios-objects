//13/8/24
//Loops | Ejercicios básicos | While - Do While
//1. Crea una función sumarHastaLimite que reciba un número límite. Usa un bucle while para sumar números consecutivos (1, 2, 3,...) hasta que la suma alcance o supere el límite. Muestra el resultado en la consola.
function sumarHastaLimite(limitNum) {
  let i = 0;
  let cont = 1;
  while (i < limitNum) {
    i = i + cont;
    cont = cont + 1;
  }
  return i;
}
console.log(sumarHastaLimite(10));

//2. Escribe una función contarPares que reciba un número n. Usa un bucle while para contar cuántos números pares hay entre 1 y n. Muestra el resultado en la consola.
function contarPares(n) {
  let i = 0;
  let cont = 0;
  while (i < n) {
    i = i + 1;
    if (i % 2 == 0) {
      cont = cont + 1;
    }
  }
  return cont;
}
console.log(contarPares(10));

//3. Crea una función multiplicar que reciba dos números a y b. Usa un bucle while para multiplicar a por b mediante sumas sucesivas. Muestra el resultado en la consola.
function multiplicar(n1, n2) {
  let i = 0;
  let result = 0;
  while (i !== n2) {
    i = i + 1;
    result = result + n1;
    console.log(result);
  }
}
multiplicar(2, 3);

//4. Escribe una función mostrarImpares que reciba un número límite. Usa un bucle while para mostrar en la consola todos los números impares desde 1 hasta el límite.
function mostrarImpares(limitNum) {
  let i = 0;
  while (i < limitNum) {
    i = i + 1;
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
mostrarImpares(10);

//5. Escribe una función calcularFactorial que reciba un número n. Usa un bucle while para calcular el factorial de n. Muestra el resultado en la consola.
function calcularFactorial(n) {
  let i = 0;
  let result = 1;
  while (i < n) {
    result *= n - i;
    i = i + 1;
    console.log(result);
  }
}
calcularFactorial(5);

//6. Crea una función cuentaRegresiva que reciba un número n. Usa un bucle do while para realizar una cuenta regresiva desde n hasta 1, mostrando cada número en la consola.
function cuentaRegresiva(n) {
  let i = 0;
  let result = n;
  while (i < n) {
    console.log(result);
    i = i + 1;
    result -= 1;
  }
}
cuentaRegresiva(10);

//7. Escribe una función sumarDigitos que reciba un número n. Usa un bucle while para sumar todos los dígitos de n. Muestra el resultado en la consola.
function sumarDigitos(n) {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  console.log("suma de digitos: " + sum);
}
sumarDigitos(123);

//8. Escribe una función encontrarMayor que reciba un array de números. Usa un bucle while para encontrar y mostrar el mayor número en la consola.
function encontrarMayor(numArray) {
  let biggest = 0;
  let i = 0;
  while (i < numArray.length) {
    if (numArray[i] > biggest) {
      biggest = numArray[i];
    }
    i = i + 1;
  }
  return biggest;
}
array = [1, 2, 12, 6, 10, 2];
console.log(encontrarMayor(array));

//9. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.
//10. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números pares desde 1 hasta 20.
let i = 0;
let numImpar = [];
let numPar = [];
let contImpar = 0;
let contPar = 0;
do {
  if (i % 2 !== 0) {
    contImpar = contImpar + 1;
    numImpar.push(i);
  } else {
    contPar = contPar + 1;
    numPar.push(i);
  }
  i = i + 1;
} while (i < 21);
console.log(`Cantidad de numeros pares: ${contPar} ${numPar}`);
console.log(`Cantidad de numeros Impares: ${contImpar} ${numImpar}`);

//14/8/24
//Loops | While - Do While
//1. Escribe una función que reciba un array de calificaciones y calcule el promedio usando un bucle while. La función debe devolver el promedio y mostrarlo en la consola
let calif = [5, 5, 5];
function calcularPromedio(calif) {
  let i = 0;
  let prom = 0;
  while (i < calif.length) {
    prom = prom + calif[i];
    i = i + 1;
  }
  return prom / calif.length;
}
console.log(calcularPromedio(calif));

//2. Verificar Correos Electrónicos: Escribe una función llamada verificarUsuario que reciba un array de nombres de usuario y un nombre de usuario específico. Usa un bucle while para verificar si el usuario específico está en la lista. Si el usuario existe, muestra un mensaje indicando "Usuario encontrado", de lo contrario, muestra "Usuario no encontrado".
//let usuarios = ["juan", "maria", "admin", "carlos"];
//let usuarioBuscado = "admin";
let usuarios = ["juan", "maria", "admin", "carlos"];

function verificarUsuario(nombres, nomUsuario) {
  let i = 0;
  while (i < nombres.length) {
    if (nomUsuario === nombres[i]) {
      return "Usuario encontrado";
    }
    i = i + 1;
  }
  return "Usuario no encontrado";
}
console.log(verificarUsuario(usuarios, "admin"));
console.log(verificarUsuario(usuarios, "jhon"));

//3.Verificar Longitud de Contraseñas: Escribe una función llamada verificarContraseñas que reciba un array de contraseñas. Usa un bucle while para verificar cuántas contraseñas tienen al menos 8 caracteres. Muestra un mensaje indicando cuántas contraseñas cumplen con esta condición.
//let contraseñas = ["password", "1234567", "supersecret", "contraseña123"];
let contraseñas = ["password", "1234567", "supersecret", "contraseña123"];

function verificarContraseñas(contraseñas) {
  let i = 0;
  let sum = 0;
  while (i < contraseñas.length) {
    if (contraseñas[i].length >= 8) {
      sum = sum + 1;
    }
    i = i + 1;
  }
  return `${sum} contraseñas cumplen con esta condicion`;
}
console.log(verificarContraseñas(contraseñas));

//4.Verificar Existencia de un Usuario: Crea una función llamada verificarCorreos que reciba un array de correos electrónicos. Usa un bucle `while` para recorrer el array y verificar que cada correo contenga un "@" y un ".". Si todos los correos son válidos, muestra "Todos los correos son válidos", de lo contrario, muestra "Correo inválido encontrado".
//let correos = ["correo1@example.com", "correo2@example", "correo3@example.com"];
let correos = [
  "correo1@example.com",
  "correo2@example.com",
  "correo3@example.com",
];

function verificarCorreos(correos) {
  let i = 0;
  while (i < correos.length) {
    if (correos[i].includes("@") && correos[i].includes(".")) {
      i = i + 1;
    } else {
      return "Correo invalido encontrado";
    }
  }
  return "Todos los correos son validos";
}
console.log(verificarCorreos(correos));

//5.Escribe una función que reciba un número y determine si es primo usando un bucle do while. La función debe devolver un valor booleano indicando si el número es primo y mostrar el resultado en la consola.
function esPrimo(num) {
  let esPrimo = true;
  let divisor = 2;

  do {
    if (num % divisor === 0 && divisor !== num) {
      return (esPrimo = false);
    }
    divisor = divisor + 1;
  } while (divisor < num);
  return esPrimo;
}

console.log(esPrimo(7));
console.log(esPrimo(10));

//6.Contar Cantidad de Comentarios : Escribe una función llamada contarComentarios que reciba un array de comentarios. Cada comentario es un string. La función debe usar un bucle while para contar cuántos comentarios hay en la lista y mostrar el total en la consola.
let comentarios = ["hola", "hello", "bom dia"];

function contarComentarios(comentarios) {
  let i = 0;
  let sum = 0;
  while (i < comentarios.length) {
    sum = sum + 1;
    i = i + 1;
  }

  return "Comentarios: " + sum;
}

console.log(contarComentarios(comentarios));

//MAS ejercicios
//LOOPS | WHILE - DO WHILE
//1. Escribe una función llamada contarGoles que reciba un array de goles anotados en un partido. Cada elemento del array es un objeto que tiene dos propiedades: equipo y jugador.Usa un bucle while para recorrer el array y contar cuántos goles anotó cada equipo.
let goles = [
  {
    equipo: "Rosario Central",
    jugador: "Pijurria",
  },
  {
    equipo: "Newells",
    jugador: "Vaaaaamo neweeeells",
  },
  {
    equipo: "Newells",
    jugador: "Vaaaaamo neweeeells",
  },
];
function contarGoles(goles) {
  let i = 0;
  let equipo1 = 0;
  let equipo2 = 0;
  while (i < goles.length) {
    if (goles[i].equipo == "Rosario Central") {
      equipo1 = equipo1 + 1;
    } else {
      equipo2 = equipo2 + 1;
    }
    i = i + 1;
  }
  return `Goles del equipo 1: ${equipo1} \nGoles del equipo 2: ${equipo2}`;
}
console.log(contarGoles(goles));

//2.Crea una función llamada contarToques que reciba un array con el nombre de los jugadores que tocan el balón en una jugada. Usa un bucle while para contar cuántos toques hubo antes de que el balón saliera del campo. La jugada termina cuando encuentre el string "fuera" en el array.
//Ej del array: let jugada = ["Messi", "Di Maria", "Doye", "fuera"];
let toques = ["Messi", "Di Maria", "fuera", "Doye", "Riki"];
function contarToques(toques) {
  let i = 0;
  let pases = 0;
  while (i < toques.length) {
    if (toques[i] !== "fuera") {
      pases = pases + 1;
    } else {
      return pases;
    }
    i = i + 1;
  }
  return pases;
}
console.log("Cantidad de toques " + contarToques(toques));

//3. Escribe una función llamada practicarSaques que simule los intentos de un jugador de voleibol para hacer un saque exitoso. Usa un bucle do while para que el jugador siga intentando hasta que consiga hacer un saque exitoso. Usa Math.random() para simular si el saque fue exitoso (considerando que la probabilidad de éxito es del 30%)
function practicarSaques() {
  let cont = 0;
  let saque = 0;
  do {
    saque = Math.floor(Math.random() * 100 + 1);
    if (saque < 30) {
      cont = cont + 1;
    }
  } while (saque > 30);
  return cont;
}
console.log("Cantidad de veces que le erro: " + practicarSaques());

//4.Desde la terna arbitral de la AFA, el presidente Chiqui Mafia nos envía una lista con los jugadores que anotaron goles en un partido. Escribe una función llamada recuentoGoleadores que reciba una lista de jugadores que anotaron goles. Usa un bucle do while para contar cuántos jugadores ÚNICOS anotaron al menos un gol, y muestra el resultado en la consola.
//Ej del array: let jugadoresQueAnotaron = ["Messi", "Di Maria", "Messi", "Riquelme", "Maradona"];
let jugadoresQueAnotaron = ["Messi", "Di Maria", "Messi", "Riquelme", "Maradona"]


