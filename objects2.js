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
let friendsNames = character.friends.map(function(friend){
    return friend = friend.name})  

console.log(firstCharacterName, species, friendsNames)

//2.Crear un objeto pelicula con las propiedades titulo, año, y personajes (que es un array de objetos con propiedades nombre, especie, y rol). Luego extraer el título de la película y los nombres de los personajes principales (aquellos cuyo rol sea 'principal').
let movie={
    tittle:'Charlie and the Chocolate Factory',
    year:'2005',
    characters:[{name:'Willy Wonka', species:'human', rol:'principal'}, {name:'Charly', species:'human', rol:'principal'}, {name:'Violet Beauegarde', species:'human', rol:'secondary'}]
}
const{tittle} = movie
let findPrincipalCharactersRol = movie.characters.map(function(characterRol){
        if (characterRol.rol ==='principal'){
            let findPrincipalCharactersName = movie.characters.map(function(name){
                return name = name.name})
            console.log(findPrincipalCharactersName)
            return findPrincipalCharactersName
        }
})  
console.log(tittle, findPrincipalCharactersRol)


//3.Crear un objeto misiones con las propiedades titulo, año, y detalles (que es un objeto con propiedades misionPrincipal y misionSecundaria, ambos con propiedades descripcion y personajes (que es un array de nombres)). Luego extraer la descripción de la misión principal y los nombres de los personajes de la misión secundaria.

let missions={
    tittle:'Chapter 6: Beaver Hollow',
    year:'1899',
    details:{
        mainMission:{
            description:'',
            characters:[],
        },
        secondaryMission:{
            description:'',
            characters:[],
        },
    },
}






