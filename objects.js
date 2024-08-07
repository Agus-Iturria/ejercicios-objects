//Manipulación de Objetos en JavaScript - El Señor de los Anillos
//Enunciado:
//En este ejercicio, vas a trabajar con un objeto Personaje basado en el universo de El Señor de los Anillos. Tu tarea es crear y manipular este objeto utilizando funciones. Debes implementar varias funciones para actualizar y acceder a las propiedades del objeto.
//Instrucciones:

//1.Crea un objeto Personaje con las siguientes propiedades:
//○ Nombre
//○ Raza
//○ Edad
//○ Clase (por ejemplo: Guerrero, Mago, etc.)
//○ Arma
let personaje ={
    nombre:'Elver',
    raza:'Orco',
    edad:35,
    clase:'Guerrero',
    arma:'Hacha',
}

//2.Añade una nueva propiedad Aliado al objeto Personaje. Este debe ser de tipo string.
personaje.aliado = 'Pijurria'

//3.Actualiza la propiedad Edad del objeto Personaje para incrementar su valor en 1 usando tanto la notación de punto como la de corchetes.
personaje.edad = personaje.edad + 1
personaje["edad"] = personaje["edad"] + 1
console.log(personaje)

//4.Crea una función que reciba a Personaje, verifique si la propiedad Edad existe, y si existe, aumente su edad en 1.
function getCharacterAge(personaje) {
    if (personaje.edad !== undefined){
        personaje.edad += 1;
        return personaje.edad
    }
}
console.log(getCharacterAge(personaje))

//5.Crea una función que reciba a Personaje, verifique que tenga la propiedad Aliado, y si la tiene, devuelva true o false si el nombre del aliado tiene 10 caracteres.
function getCharacterAlly(personaje) {
    if (personaje.aliado !== undefined){
        if (personaje.aliado.length === 10){
            return true
        }
        else{
            return false
        }
    }
}
console.log(getCharacterAlly(personaje))

//6.Crea una función que reciba el objeto Personaje y retorne true o false si Nombre es igual al Nombre del aliado
function getCharacterEqualAlly(personaje){
    if (personaje.aliado === personaje.nombre){
        return true
    }
}
console.log(getCharacterEqualAlly(personaje))

//7.Crea una función que reciba el objeto Personaje y retorne una cadena que describa al personaje de la siguiente manera: "Nombre: [nombre], Edad: [edad], Arma: [arma], Raza: [raza]".
function characterDescription(personaje){
    return 'Nombre: ' + personaje.nombre + ' Edad: ' + personaje.edad + ' Arma: ' + personaje.arma + ' Raza: ' + personaje.raza
}
console.log(characterDescription(personaje))

//8.Crea una función que reciba a Personaje y verifique si es mayor de 100 años (considerando que en el universo de El Señor de los Anillos algunas razas pueden vivir mucho más tiempo).
function characterOlderThanOneHundred(personaje){
    if(personaje.edad > 100){
        return true
    }
    else{
        return false
    }
}
console.log(characterOlderThanOneHundred(personaje))

//9.Crea una función que reciba a Personaje y devuelva un objeto con Nombre y Edad.
function getCharacterNameAge(personaje){
    let personajeNombreEdad ={
        nombre: personaje.nombre,
        edad: personaje.edad,
    }
    return personajeNombreEdad
}
console.log(getCharacterNameAge(personaje))

//10. Añade una propiedad Habilidades que sea un array de habilidades del personaje y accede a ese array por medio de notación de punto o corchetes.
personaje.habilidades = []

//11.Crea una función que reciba una habilidad y la agregue al array Habilidades.
function addCharacterAbility(personaje, habilidad){
    personaje.habilidades.push(habilidad)
    return personaje.habilidades
}
console.log(addCharacterAbility(personaje, "agilidad"))

//12.Crea una función que reciba una habilidad y la devuelva si existe en el array Habilidades.
function getCharacterAbility(personaje, habilidad){
    if(personaje.habilidades.includes(habilidad)){
        return true
    }
    else{
        return false
    }
}
console.log(getCharacterAbility(personaje, "agilidad"))

//13.Crea una función que retorne cuántas habilidades tiene el personaje.
function quantityAbilities(personaje){
    return personaje.habilidades.length
}
console.log(quantityAbilites(personaje))

//14.Añade una propiedad Aliados que sea un array de nombres de aliados y accede a ese array por medio de notación de punto o corchetes.
personaje.aliados = ['Pijurria']
console.log(personaje)

//15. Crea una función que reciba un aliado y lo agregue al array Aliados.
function newAlly(personaje,ally){
    personaje.aliados.push(ally)
    return personaje.aliados
}
console.log(newAlly(personaje, 'Ernesto'))

//16. Crea una función que reciba un aliado y lo elimine del array Aliados.
function eliminateAlly(personaje, ally){
    let findAlly = personaje.aliados.filter(function(aliado){
        return aliado !== ally
    })
    return findAlly
}
console.log(eliminateAlly(personaje,'Ernesto'))

//17. Crea una función que devuelva una lista de los nombres de los aliados
function allyNameList(personaje){
    return personaje.aliados
}
console.log(allyNameList(personaje))

//18. Crea una función que reciba un nuevo nombre de arma y actualice la propiedad Arma del objeto Personaje.
function newWeapon(personaje, weapon){
    return personaje.arma = weapon
}
console.log(newWeapon(personaje, "arco"))

//19. Crea una función que reciba una clase y devuelva true o false si el personaje tiene esa clase.
function getCharacterClass(personaje, clase){
    if(personaje.clase.includes(clase)){
        return true
    }
    else{
        return false
    }
}
console.log(getCharacterClass(personaje, "Guerrero"))

//20. Crea una función que reciba a Personaje, el nombre de una propiedad (como "Edad", "Clase", etc.), y un nuevo valor para esa propiedad. La función debe actualizar lapropiedad del objeto Personaje con el nuevo valor proporcionado sin usar métodos avanzados.
function updateProperty(personaje, property, newValue){
    if (personaje.includes(property)){
        personaje[property] = newValue;
        return personaje
    }
}
console.log(updateProperty(personaje, 'arma', 'espada'))
