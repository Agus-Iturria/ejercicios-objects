//Ejercicio 1: Filtrar productos por disponibilidad
//Enunciado:
//Tienes un objeto donde las claves son nombres de productos y los valores son booleanos que indican si el producto está en stock o no. Usa Object.entries para filtrar el objeto y obtener solo los productos disponibles. Crear un nuevo objeto availableProducts con los productos disponibles
//const products = { "Laptop": true, "Smartphone": false, "Tablet": true, "Monitor": false }; 
// Resultado esperado: { "Laptop": true, "Tablet": true }
const products = { 
    Laptop: true, 
    Smartphone: false, 
    Tablet: true, 
    Monitor: false 
}
const availableProducts = Object.fromEntries(Object.entries(products).filter(function(value){
    return value[1]
  })
)
console.log(availableProducts)

//2.Ejercicio 2: Convertir datos en formato clave-valor a un array de strings
//Enunciado:
//Tienes un objeto que representa los resultados de una encuesta, con las claves como preguntas y los valores como respuestas. Usa Object.entries para convertir este objeto en un array de strings, donde cada string tiene el formato "Pregunta: Respuesta".
//const surveyResults = { "favoriteColor": "Blue", "likesPizza": "Yes", "ageGroup": "25-34" }; 
// Resultado esperado: ["favoriteColor: Blue", "likesPizza: Yes", "ageGroup: 25-34"]
const survey ={
    favoriteColor:'',
    likesPizza:'',
    ageGroup:'',
}


