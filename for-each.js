//16/8/24
//1. Imagina que sos parte del equipo de desarrollo de Boca, y tu tarea es gestionar el presupuesto del club de fútbol. Cada categoría de gasto del club, como sueldos de jugadores, mantenimiento del estadio, y costos de viajes, se representa como una propiedad en un objeto. Tu tarea es crear una función que calcule el total de todos los gastos del club utilizando un bucle for...in. La función debe:
//a. Recibir un objeto gastos donde cada propiedad representa una categoría degasto y su valor es el monto de gasto en esa categoría.
//b. Utilizar un bucle for...in para recorrer las propiedades del objeto gastos y sumar los valores de cada propiedad.
//c. Mostrar el total de los gastos en la consola.

//2.Después de haber calculado el total de gastos , ahora necesitas saber cómo se distribuyen esos gastos en diferentes categorías. Tienes un objeto que representa las categorías de gastos del club, con cada propiedad indicando el tipo de gasto y su monto. Tu tarea es crear una función que:
//a. Reciba un objeto gastos donde cada propiedad representa una categoría de gasto y su valor es el monto gastado en esa categoría.
//b. Utilice un bucle for...in para recorrer las categorías de gasto.
//c. Imprima el monto gastado en cada categoría y calcule el total general de los gastos.
//d. Muestre en la consola cuánto se gastó en cada categoría y el total general, para entender mejor cómo se distribuyen los gastos.

let gastos = {
  sueldos: 5000,
  mantenimiento: 2000,
  viajes: 4000,
};

function calcularGastos(gastos) {
  let costoTotal = 0;
  for (let i in gastos) {
    costoTotal = costoTotal + gastos[i];
    console.log(`${i} : $${gastos[i]}`);
  }
  return costoTotal;
}
console.log("Costo total = $" + calcularGastos(gastos));

//3. Imagina que trabajás en el equipo de desarrollo de FIFA y necesitás actualizar las estadísticas de los jugadores cada año después de la temporada. Tu tarea es crear una función que tome un objeto con las estadísticas actuales del jugador y un objeto con los nuevos valores a añadir. La función debe usar un bucle for...in para recorrer las propiedades del objeto de estadísticas y actualizar los valores correspondientes. La función debe:
//a. Recibir un objeto jugador con las propiedades nombre, asistencias, y goles, que contienen las estadísticas actuales del jugador.
//b. Recibir un objeto nuevasEstadisticas con los valores de asistencias y goles que deben añadirse.
//c. Usar un bucle for...in para recorrer las propiedades de nuevasEstadisticas y añadir los valores a las estadísticas del jugador.
//d. Verificar que los nuevos valores sean números válidos (mayores o iguales a cero) antes de realizar la actualización.
//e. Devolver un objeto con las estadísticas actualizadas para el jugador.

let jugador = {
  nombre: "Cheng",
  asistencias: 33,
  goles: 1,
};
let nuevasEstadisticas = {
  asistencias: 35,
  goles: 2,
};
function cambiarEstadisticas(jugador, nuevasEst) {
  for (let i in nuevasEst) {
    if (nuevasEst[i] >= 0) {
      if (i in jugador) {
        jugador[i] = nuevasEst[i];
      }
    }
  }
  return jugador;
}
console.log(cambiarEstadisticas(jugador, nuevasEstadisticas));

//4.Imaginá que trabajás en el equipo de análisis de datos del Mundial de la FIFA. Necesitás saber cuántas veces aparece una letra específica en el nombre de un jugador. Tu tarea es escribir un programa que:
//a. Reciba una cadena de texto cadena que contiene el nombre de un jugador y un carácter 'caracter' que deseas contar.
//b. Utilice un bucle for...of para recorrer cada carácter en la cadena de texto.
//c. Cuente cuántas veces aparece el carácter dado en el nombre del jugador.
//d. Muestra el resultado indicando cuántas veces aparece el carácter en el nombre.
let nombreJugador = "Juan Jose Javier";
function contarCaracteres(texto, caracter) {
  let cont = 0;
  for (let i of texto) {
    if (i === caracter) {
      cont = cont + 1;
    }
  }
  return cont;
}

console.log(contarCaracteres(nombreJugador, "J"));

//5.Imaginá que estás trabajando en el sistema de compras del Mundial de la FIFA y necesitas calcular el costo total de todos los productos en el carrito de compras de un fanático. Tienes un array que contiene objetos, donde cada objeto representa un producto con propiedades como nombre y precio. Tu tarea es crear un programa que:
//a. Reciba un array de objetos productos, donde cada objeto tiene propiedades nombre y precio.
//b. Utilice un bucle for...of para recorrer cada objeto en el array.
//c. Sume los precios de todos los productos en el carrito.
//d. Muestra el costo total acumulado, que será el monto que debe pagar el cliente por su compra.

productos = [
  { nombre: "Remera", precio: 2000 },
  { nombre: "Pantalon", precio: 2000 },
  { nombre: "Botines", precio: 2000 },
  { nombre: "Pelota", precio: 3000 },
];

function calcularPrecio(carrito) {
  let costoTotal = 0;
  for (let i of carrito) {
    costoTotal += i.precio;
  }
  return costoTotal;
}
console.log(calcularPrecio(productos));

//6.estás trabajando en el sistema de ventas de tickets para la Copa América. Tienes un array de objetos donde cada objeto representa un ticket disponible, con propiedades nombre (del evento) y disponible (un booleano que indica si el ticket está disponible o agotado).
//Tu tarea es escribir un programa que:
//a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades nombre y disponible.
//b. Utilice un bucle for...of para recorrer cada objeto en el array.
//c. Genere un informe que muestre, para cada ticket, si está disponible o agotado.
//d. Presenta el nombre del evento seguido de su estado de disponibilidad.

let tickets = [
  { nombre: "Uruguay vs Brazil", disponible: true },
  { nombre: "Argentina vs Canada", disponible: true },
  { nombre: "Colombia vs Panama", disponible: false },
  { nombre: "Uruguay vs Colombia", disponible: true },
];
function encontrarDisponibles(tickets) {
  let dis = "";
  for (let i of tickets) {
    if (i.disponible == true) {
      dis = "Disponible";
    } else {
      dis = "Agotado";
    }
    console.log(`${i.nombre} esta ${dis}`);
  }
}
encontrarDisponibles(tickets);

//7. Han decidido ofrecer un descuento especial del 15% en todas las categorías de tickets. Tenés un array de objetos donde cada objeto representa un ticket, con propiedades nombre (del tipo de ticket) y precio (el precio actual del ticket). Tu tarea es escribir una función que:
//a. Reciba un array de objetos tickets, donde cada objeto tiene propiedades nombre y precio.
//b. Utilice el método forEach para recorrer cada ticket en el array.
//c. Aplique un descuento del 15% al precio de cada ticket.
//Devuelve el array con los precios actualizados pero necesitamos un backup de los precios viejos

let tickets2 = [
  { nombre: "Coraline", precio: 1200 },
  { nombre: "El lobo de wallstreet", precio: 3000 },
  { nombre: "Pulp Fiction", precio: 5000 },
  { nombre: "Alice in wonderlands", precio: 2000 },
];

function aplicarDescuento(tickets) {
  let newTickets = [];
  tickets.forEach(function (ticket) {
    let newTicket = { ...ticket };
    newTicket.precio = newTicket.precio - newTicket.precio * 0.15;
    newTickets.push(newTicket);
  });
  return newTickets;
}
console.log(aplicarDescuento(tickets2));

//8. Como encargado de ajustar los precios de los videojuegos en Steam para una nueva región, debes convertir los precios a dólares y realizar ajustes basados en la popularidad de cada juego. Mantén una copia del precio original para referencia. Escribe una función que reciba:
//Un array de objetos juegos, donde cada objeto tiene propiedades nombre, precio, y popularidad.
//Una tasa de cambio a dólares.
//La función debe:
//a) Convertir los precios a dólares.
//b) Aplicar un ajuste adicional: i. $5 si la popularidad es 8 o más. ii. $2 si la popularidad es menos de 8.
//c) Calcular y mostrar el precio promedio de los juegos.

let juegosSteam = [
  { nombre: "Rainbow Six Siege", precio: 5000, popularidad: "6" },
  { nombre: "The Last Of Us 2", precio: 8000, popularidad: "7" },
  { nombre: "Wolfenstein: The New Order", precio: 3500, popularidad: "3" },
  { nombre: "Red Dead Redemption 2", precio: 10000, popularidad: "8" },
  { nombre: "Gta 5", precio: 2400, popularidad: "8" },
];
let tasaDeCambio = 941;

function pesosADolares(juegosSteam, tasaCambio) {
  let juegosCambiados = [];
  let total = 0;

  juegosSteam.forEach(function (juego) {
    let juegoCambiado = { ...juego };
    juegoCambiado.precio = juegoCambiado.precio / tasaCambio;
    if (juegoCambiado.popularidad >= 8) {
      juegoCambiado.precio = juegoCambiado.precio + 5;
    } else {
      juegoCambiado.precio = juegoCambiado.precio + 2;
    }
    total += juegoCambiado.precio;
    juegosCambiados.push(juegoCambiado);
  });
  return juegosCambiados;
}
console.log(pesosADolares(juegosSteam, tasaDeCambio));

//9. Imaginá que sos el encargado de la tienda de merchandising de Argentina y necesitas actualizar el inventario después de una gran venta celebrando un triunfo. Los hinchas han estado comprando productos como locos, ¡y tu tarea es ajustar el stock!
//Descripción del Problema:
//Escribe una función en JavaScript que realice las siguientes tareas:
//a) Recibe un Array de Productos: Cada objeto en el array representa un producto y tiene las siguientes propiedades:
//○ nombre: El nombre del producto (por ejemplo, "Camiseta del Campeón", "Gorra del Dibu").
//○ cantidad: La cantidad actual en stock del producto.
//○ vendido: La cantidad del producto que se ha vendido.
//b) Actualizar el Stock:
//○ Utiliza el método forEach para recorrer el array de productos.
//○ Calcula la cantidad restante de cada producto después de la venta (restando la cantidad vendida de la cantidad en stock).
//○ Actualiza la cantidad en stock del producto con el nuevo valor.
//c) Mostrar Mensajes:
//○ Crea un mensaje para cada producto que indique si el stock es suficiente o está bajo:
//■ Si la cantidad restante es mayor a 10, el mensaje debe ser: "La [nombre del producto] está bien abastecida.
//Cantidad restante en stock: [cantidad restante]".
//■ Si la cantidad restante es 10 o menos, el mensaje debe ser: "¡La [nombre del producto] está en bajo stock! Solo quedan [cantidad restante] unidades.".
//d) Mostrar los Mensajes en la Consola: Imprime cada mensaje en la consola.
//e) Calcular el Porcentaje Restante: calcula el porcentaje de stock restante. El porcentaje se calcula como: (cantidadRestante / cantidadOriginal) * 100.
let productosArgentina = [
  { nombre: "Camiseta del Campeón", cantidad: 100, vendido: 30 },
  { nombre: "Gorra del Dibu", cantidad: 50, vendido: 20 },
  {
    nombre: "Bufanda de los Campeones del Mundo",
    cantidad: 35,
    vendido: 25,
  },
];

function calcularStock(productos) {
  let cantRestante = 0;
  let porcentajeStock = 0
  productos.forEach(function (producto) {
    cantRestante = producto.cantidad - producto.vendido;
    porcentajeStock = (cantRestante / producto.cantidad) * 100
    if (cantRestante > 10){
        console.log(`La ${producto.nombre} está bien abastecida. Cantidad restante en stock: ${cantRestante}\nPorcentaje de stock restante: ${porcentajeStock}%`) 
    }else{
        console.log(`¡La ${producto.nombre} está en bajo stock! Solo quedan ${cantRestante} unidades \nPorcentaje de stock restante: ${porcentajeStock}%`)
    }
  });
}
calcularStock(productosArgentina);

//10. Imaginá que sos parte del equipo de marketing de BOCA que acaba de lanzar una nueva línea de productos oficiales. Necesitás enviar un correo electrónico a todos los usuarios registrados en tu base de datos para informarles sobre esta novedad. Tu tarea es escribir una función que:
//Reciba dos parámetros:
//○ Un array de objetos usuarios, donde cada objeto tiene las propiedades nombre, email y preferencias.
//○ Un objeto de promociones, donde las claves son los nombres de las categorías de productos (por ejemplo, "Camisetas", "Gorras", "Bufandas"), y los valores son las promociones asociadas a cada categoría (por ejemplo, "10% de descuento adicional").
//Utilice el método forEach para recorrer el array de usuarios.
//Para cada usuario, la función debe:
//○ Verificar si el usuario tiene alguna preferencia en el array preferencias.
//○ Si el usuario tiene preferencias, recorrer ese array de preferencias y:
//■ Verificar si existe una promoción en el objeto promociones para esa preferencia.
//■ Si existe una promoción, mostrar un mensaje en la consola que indique que se ha enviado un correo a ese usuario con la promoción aplicada.
//■ Si no existe una promoción para la preferencia, mostrar un mensaje en la consola que indique que se ha enviado un correo sin promoción específica.
//○ Si el usuario no tiene preferencias, mostrar un mensaje en la consola que indique que se ha enviado un correo genérico sin promoción.
//La función debe llevar un conteo de cuántos correos se enviaron en total y cuántas veces se aplicó cada promoción.
//Al final de la función, mostrar en la consola el total de correos enviados y un resumen de las promociones aplicadas, indicando cuántas veces se aplicó cada una.

const usuarios = [
    { nombre: "Juan Pérez", email: "juan.perez@example.com", preferencias:["Camisetas", "Gorras"] },
    { nombre: "María García", email: "maria.garcia@example.com", preferencias:["Bufandas"] },
    { nombre: "Carlos López", email: "carlos.lopez@example.com", preferencias: []}
];
const promociones = {
    "Camisetas": "10% de descuento adicional",
    "Gorras": "15% de descuento adicional",
    "Bufandas": "20% de descuento adicional"
};

function enviarEmails(usuarios, promociones){
    let contadorCorreos = 0
    let promocionesAplicadas = []
    usuarios.forEach(function(user){
        if(usuarios.preferencias.length !== 0){
            user.preferencias.forEach(function(preferencia){
                if(promociones[preferencia]){
                    console.log(`Enviando correo a ${usuarios.nombre} ${usuarios.email} sobre ${preferencia} -
                    Promoción: ${promociones[preferencia]}`)
                    contadorCorreos = contadorCorreos + 1
                }
            })
        }else{
            console.log(`Enviando correo genérico a ${usuarios.nombre} ${usuarios.email}`)
            contadorCorreos = contadorCorreos + 1
        }
    })
    console.log(`Total de correos enviados: ${contadorCorreos}`);
    console.log('Promociones aplicadas:');
}
enviarEmails(usuarios, promociones)




