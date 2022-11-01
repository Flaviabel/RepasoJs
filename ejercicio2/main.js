//Escribe una función que acepte un array e imprima por consola cada elemento del array, pero empezando por el final.
let array1= [1,2,3,4,5]
let n=0
function newArray(num){
    for(let i = num.length-1 ; i >=0;  i--){
       let n = num[i]
       console.log(n)
    }
}
console.log(newArray(array1)) 