//Ejercicio 1
//Escribe un función que acepte un array de números y devuelva la suma de los números impares.

function arrayDeNumeros(num) {
    let impares= 0
    for (let i = 0; i <= num.length; i++) {
        if (i % 2 !== 0) {
            impares += i
        }
    }
    console.log(impares)
}
console.log(arrayDeNumeros([1, 2, 3, 4, 5]))
