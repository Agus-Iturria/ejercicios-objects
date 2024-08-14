//Loops | Ejercicios básicos | While - Do While 
//1. Crea una función sumarHastaLimite que reciba un número límite. Usa un bucle while para sumar números consecutivos (1, 2, 3,...) hasta que la suma alcance o supere el límite. Muestra el resultado en la consola. 
function sumarHastaLimite(limitNum){
    let i = 0 
    let cont = 1
    while(i < limitNum){
        i = i + cont
        cont = cont + 1
    }
    return i
}
console.log(sumarHastaLimite(10))

//2. Escribe una función contarPares que reciba un número n. Usa un bucle while para contar cuántos números pares hay entre 1 y n. Muestra el resultado en la consola. 
function contarPares(n){
    let i = 0
    let cont = 0
    while(i < n){
        i = i +1
        if(i%2 == 0){
            cont = cont + 1
        }
    }
    return(cont)
}
console.log(contarPares(10))

//3. Crea una función multiplicar que reciba dos números a y b. Usa un bucle while para multiplicar a por b mediante sumas sucesivas. Muestra el resultado en la consola. 
function multiplicar(n1, n2){
    let i = 0
    let result = 0
    while(i !== n2){
        i = i + 1
        result = result + n1
        console.log(result)
    }
}
multiplicar(2, 3)

//4. Escribe una función mostrarImpares que reciba un número límite. Usa un bucle while para mostrar en la consola todos los números impares desde 1 hasta el límite. 
function mostrarImpares(limitNum){
    let i = 0
    while(i < limitNum){
        i = i +1
        if(i%2 !== 0){
            console.log(i)
        }
    }
}
mostrarImpares(10)

//5. Escribe una función calcularFactorial que reciba un número n. Usa un bucle while para calcular el factorial de n. Muestra el resultado en la consola.
function calcularFactorial(n){
    let i = 0
    let result = 1
    while(i < n){
        result *= n - i
        i = i + 1
        console.log(result)
    }
}
calcularFactorial(5)

//6. Crea una función cuentaRegresiva que reciba un número n. Usa un bucle do while para realizar una cuenta regresiva desde n hasta 1, mostrando cada número en la consola. 
function cuentaRegresiva(n){
    let i = 0
    let result = n
    while(i < n){
        console.log(result)
        i = i + 1
        result -= 1
    }
}
cuentaRegresiva(10)

//7. Escribe una función sumarDigitos que reciba un número n. Usa un bucle while para sumar todos los dígitos de n. Muestra el resultado en la consola. 
function sumarDigitos(n){
    let sum = 0
    while (n) {
        sum += n % 10
        n = Math.floor(n / 10)
    }
    console.log("suma de digitos: " + sum)
}
sumarDigitos(123)

//8. Escribe una función encontrarMayor que reciba un array de números. Usa un bucle while para encontrar y mostrar el mayor número en la consola.
function encontrarMayor(numArray){
    let biggest = 0
    let i = 0
    while(i < numArray.length){
        if (numArray[i] > biggest){
            biggest = numArray[i]
        }
        i = i + 1
    }
    return biggest
}
array = [1, 2, 12, 6, 10, 2]
console.log(encontrarMayor(array))

//9. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números impares desde 1 hasta 20.
//10. Escribe un programa que use un bucle do while para contar y mostrar en la consola todos los números pares desde 1 hasta 20.
let i = 0
let numImpar= []
let numPar = []
let contImpar = 0
let contPar = 0
do{
    if(i %2 !== 0){
        contImpar = contImpar + 1
        numImpar.push(i)
    }
    else{
        contPar = contPar + 1
        numPar.push(i)
    }
    i = i + 1
} while(i < 21)
console.log(`Cantidad de numeros pares: ${contPar} ${numPar}`)
console.log(`Cantidad de numeros Impares: ${contImpar} ${numImpar}`)