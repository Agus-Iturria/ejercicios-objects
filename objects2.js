//Destructuring con Shrek
//PARTE 1
//1-Crear un objeto con las propiedades nombre y especie de Shrek, y luego extraer esas propiedades con destructuring.
let character ={
    name: 'Shrek',
    species:'ogre',
}
const{name, species} = character
console.log(name)
console.log(species)

//2.Crear un objeto con las propiedades nombre, edad, y especie de Burro, y luego extraer nombre y edad con alias nombrePersonaje y edadPersonaje respectivamente.
let secondCharacter={
    name:'Donkey',
    age:'12',
    species:'donkey',
}
const{name: secondCharacterName, age: secondCharacterAge}  = secondCharacter
console.log(secondCharacterName)
console.log(secondCharacterAge)

//3.Crear un objeto con las propiedades nombre y especie de Fiona, y luego extraer nombre y asignar un valor predeterminado de 'desconocida' a ocupacion.
let thirdCharacter={
    name:'Fiona',
    age:'30',
    species:'ogre',
}
const{name:thirdCharacterName, ocupation = 'unknown'} = thirdCharacter
console.log(thirdCharacterName)
console.log(ocupation)

//4.Crear un objeto con las propiedades nombre, especie, y edad de Shrek, y luego usar destructuring en los parámetros de una función para extraer nombre y especie.
character.age = 32
function extractNameSpecies({name, species}){
    return (`The name of the character is ${name} and he is an ${species}`)
}
console.log(extractNameSpecies(character))

//5.Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre, especie, y amigos, asignando un valor predeterminado de [] a enemigos si no existe.
character.friends = ['Donkey', 'Gingerbread Man']
const{friends:firstCharacterFriends, firstCharacterEnemies = []} = character
console.log(`${name} ${species} ${firstCharacterFriends} ${firstCharacterEnemies}`)

//6.Crear un objeto con las propiedades nombre, especie, edad, y amigos de Shrek, y luego extraer nombre y amigos, y luego extraer el primer amigo.
const firstFriend = firstCharacterFriends[0]
console.log(firstFriend)

//7.Crear un array de objetos con las propiedades nombre y edad de Shrek, Burro, y Fiona, y luego extraer nombre y edad de cada objeto en el array. Ponerle un alias adecuado a cada uno.
const{name:firstCharacterName, age:firstCharacterAge}  = character
const{age:thirdCharacterAge} = thirdCharacter
const shrek = {firstCharacterName, firstCharacterAge} 
const fiona = {secondCharacterName, secondCharacterAge}
const donkey = {thirdCharacterName, thirdCharacterAge}
let movieCharacters = [shrek, fiona, donkey]

console.log(movieCharacters)

movieCharacters =[firstCharacterName, firstCharacterAge, secondCharacterName, secondCharacterAge, thirdCharacterName, thirdCharacterAge]
console.log(movieCharacters)
//PARTE 2
//1.Crear un objeto shrek con las propiedades nombre, especie, edad, y amigos (que es un array de objetos con propiedades nombre y especie). Luego extraer nombre, especie, y los nombres de los amigos.
character.friends=[{name:'Donkey', species:'donkey'},{name:'Gingerbread Man', species:'cookie'}]
const{friends} = character
let friendsNames = character.friends.map(function(friend){return friend = friend.name})  

console.log(firstCharacterName, species, friendsNames)

//2.Crear un objeto pelicula con las propiedades titulo, año, y personajes (que es un array de objetos con propiedades nombre, especie, y rol). Luego extraer el título de la película y los nombres de los personajes principales (aquellos cuyo rol sea 'principal').
let movie = {
    tittle: 'Charlie and the Chocolate Factory',
    year: 2005,
    characters: [
        { name: "Willy Wonka", species: "human", rol: "principal" },
        { name: "Charly", species: "human", rol: "principal" },
        { name: "Violet Beauegarde", species: "human", rol: "secondary" },
    ]
};

let {tittle, characters } = movie
const mainCharacters = characters.filter(function(character){return character.rol === 'principal'}).map(function(character){return character.name})
console.log(tittle, mainCharacters)

//3.Crear un objeto misiones con las propiedades titulo, año, y detalles (que es un objeto con propiedades misionPrincipal y misionSecundaria, ambos con propiedades descripcion y personajes (que es un array de nombres)). Luego extraer la descripción de la misión principal y los nombres de los personajes de la misión secundaria.
let missions={
    tittle:'Chapter 6: Beaver Hollow',
    year:'1899',
    details:{
        mainMission:{
            description:'Help Jhon Marston or escape  with the Money',
            characters:['Arthur Morgan','Jhon Marston','Dutch Vanderline','Micah Bell'],
        },
        secondaryMission:{
            description:'Help Sadie finding Jhons Wife',
            characters:['Arthur Morgan','Sadie Adler'],
        },
    },
}

const { details: { mainMission: { description: mainDescription }, secondaryMission: { characters: secondaryCharacters }}} = missions
console.log(mainDescription, secondaryCharacters)

//4.Crear un objeto evento con las propiedades nombre, fecha, y invitados (que es un array de objetos con propiedades nombre, especie, y confirmado (booleano)). Luego extraer el nombre del evento y los nombres de los invitados confirmados.
let event = {
    name: "Proyect X",
    date: "2012-8-4",
    guests: [
        { name: "Pepe", especie: "human", confirm: true },
        { name: "Jose", especie: "human", confirm: false },
        { name: "Andres", especie: "human", confirm: true },
    ]
};
let eventName = event.name;
let guestsList = event.guests;
let confirmedGuests = guestsList.filter(function(guest){return guest.confirm === true}).map(function(guest){return guest.name})
console.log(eventName, confirmedGuests)

//5.Crear un objeto banda con las propiedades nombre, genero, y miembros (que es un array de objetos con propiedades nombre, instrumento, y experiencia (en años)). Luego extraer el nombre del género y los instrumentos de los miembros con más de 5 años de experiencia.
const band = {
    name: 'Slipknot',
    gender: 'Numetal',
    members: [
        { name: 'Corey Taylor', instrument: 'Microphone', experience: 10 },
        { name: 'Joey Jordison', instrument: 'Drums', experience: 8 },
        { name: 'Paul Gray', instrument: 'Bass', experience: 9 },
        { name: 'Jim Root', instrument: 'Electric Guitar', experience: 6 },
        { name: 'Mick Thomson', instrument: 'Electric Guitar', experience: 9 },
        { name: 'Shawn Crahan', instrument: 'Beer Barrel', experience: 3 },
        { name: 'Craig Jones', instrument: 'Electric Piano', experience: 7 },
        { name: 'Sid Wilson', instrument: 'TurnTable', experience: 10 },
        { name: 'Chris Fehn', instrument: 'Drums', experience: 10 },
    ]
};

const { gender, members } = band
let instrumentsWithExperience = members.filter(function(member){return member.experience > 5}).map(function(member){return member.instrument})
console.log(gender, instrumentsWithExperience)

//PARTE 3
//1.Crear una función crearPareja que reciba dos objetos ogro y princesa y devuelva un nuevo objeto pareja combinando sus propiedades, renombrando nombre a nombreOgro y nombrePrincesa. Además, si la edad de cualquiera de ellos es mayor a 28, agregar un array misiones con una misión inicial.
let shrek2 = {
    name: 'Shrek', 
    age: 32,
}
let fiona2 = {
    name: 'Fiona',
    age: 30,
}

function createCouple(ogre, princess){
    const {name: ogreName, age: ogreAge } = ogre
    const {name: princessName, age: princessAge } = princess
    let couple = {
        ogreName,
        princessName
    }
    if (ogreAge > 28 || princessAge > 28){
        couple.misiones = ['Main Mission']
    }
    return couple
}
console.log(createCouple(shrek2, fiona2))

//2.Crear una función crearRealeza que reciba dos objetos rey y reina y devuelva un nuevo objeto realeza combinando sus propiedades, renombrando nombre a nombreRey y nombreReina, y poder a poderRey y poderReina. Además, si los reinos son iguales, agregar un array herederos con un heredero inicial. (no se hace)



//3.Crear una función unirPersonajes que reciba un array de objetos personajes y devuelva un nuevo objeto alianza con propiedades nombres (un array de los nombres de los personajes) y reinos (un array de los reinos de los personajes). Además, si cualquier personaje pertenece al reino 'Pantano', agregar 'Pantano' a un array lugaresImportantes.
let charactersAndKindoms = [
    {name: 'Shrek', kingdom: 'Swamp' },
    {name: 'Fiona', kingdom: 'Duloc' },
    {name: 'Donkey', kingdom: 'Swamp' }
  ]
  
function matchCharacters(characters){
    const charactersNames = characters.map(({name}) => name)
    const kingdoms = characters.map(({kingdom}) => kingdom)
    const alliance = {charactersNames, kingdoms}
    if (kingdoms.includes('Swamp')){
        alliance.importantPlaces = ['Swamp']
    }
    return alliance
}
console.log(matchCharacters(charactersAndKindoms))


//4.Crear una función resumenPersonajes que reciba un array de objetos personajes donde cada objeto tiene una propiedad info que a su vez es un objeto con propiedades nombre, edad, y reino. Devuelve un nuevo objeto resumen con propiedades nombres (array de nombres) y edadesMayores (array de edades mayores a 30). Si algún personaje tiene edad mayor a 40, agregar 'mayoresDe40' a un array categorias.
let newCharacters =[
    { info: { name: 'Shrek', age: 35, kingdom: 'Pantano' } },
    { info: { name: 'Fiona', age: 28, kingdom: 'Duloc' } },
    { info: { name: 'Rey Harold', age: 45, kingdom: 'Far Far Away' } }
  ]

function charactersSummary(characters){
    const summary = {
        names: characters.map(function(character){return character.info.name}),
        olderAges: characters.map(function(character){return character.info.age}).filter(function(character)
        {return character.info.age > 30}),
    }
    if (summary.olderAges.some(function(age){
        return age.age > 40
    })) {
        summary.category = ['mayoresDe40']
    }
    return summary
}
//console.log(charactersSummary(newCharacters))

//PARTE 4. SPREAD OPERATOR
//1.Crea una función agregarHobbies que reciba dos objetos persona y nuevosHobbies. El objeto persona tiene propiedades nombre, edad, y hobbies (un array de hobbies). El objeto nuevosHobbies tiene una propiedad hobbies que también es un array de nuevos hobbies. Usa el spread operator para combinar el array hobbies de persona con el array hobbies de nuevosHobbies en un nuevo objeto personaActualizada. Devuelve personaActualizada.
let person = {
    name:'Ricardo',
    age: 28,
    hobbies:['Reading', 'Fishing'],
} 
let newHobbies = {
    hobbies: ['Baking', 'Golf']
}

function addHobbies(person, hobbies){
    const updatedPerson = {...person, hobbies:[...person.hobbies, ...hobbies.hobbies]}
    return updatedPerson
}
console.log(addHobbies(person, newHobbies))

//2.Crea una función actualizarDatos que reciba dos objetos datosPersonales y datosContacto. El objeto datosPersonales tiene propiedades nombre y edad, y el objeto datosContacto tiene propiedades direccion y telefono. Usa el spread operator para combinar ambos objetos en un nuevo objeto informacionCompleta. Devuelve informacionCompleta.
let personalData={
    name:'Andres',
    age:'34'
}

let contactData={
    address:'Antonio-Del-Valle 333',
    phoneNumber:'1122334455',
}

function updateData(personalData, contactData){
    const completeInformation ={...personalData, ...contactData}
    return completeInformation
}
console.log(updateData(personalData,  contactData))

//3.Crea una función agregarCaracteristicas que reciba dos objetos vehiculo y caracteristicas. El objeto vehiculo tiene propiedades marca y modelo, y el objeto caracteristicas tiene propiedades color y tipo. Usa el spread operator para combinar estos objetos en un nuevo objeto vehiculoCompleto. Devuelve vehiculoCompleto, agregando las propiedades de caracteristicas solo si el color es 'rojo'.
let vehicle ={
    carBrand:'Toyota',
    carModel:'Corola',
}
let characteristics={
    color:'Red',
    type:'Car',
}
function addCharacteristic(vehicle,characteristics){
    if(characteristics.color === 'Red'){
        const completeVehivle = {...vehicle, ...characteristics}
        return completeVehivle
    }
}
console.log(addCharacteristic(vehicle, characteristics))

//4.Crea una función eliminarTelefono que reciba un objeto persona y elimine explícitamente la propiedad telefono del objeto. Usa el spread operator para crear un nuevo objeto personaSinTelefono que contenga todas las propiedades del objeto original persona excepto telefono. Devuelve personaSinTelefono.
let person2 ={
    name:'Javier',
    age:50,
    address:'JavbierLandia',
    phoneNumber:'1222113413',
}
function eliminatePhoneNumber(person){
    const {phoneNumber, ...personWithoutPhoneNumber} = person
    return personWithoutPhoneNumber
}
console.log(eliminatePhoneNumber(person2))

  



