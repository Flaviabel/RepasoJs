//Teniendo dos arrays con valores individuales, escriba un programa de JavaScript para calcular la 
//suma de cada valor de cada índice individual de los arrays dados.

array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 1, 13];


function dosArrays(arr1, arr2) {
  let sum = 0
  let suma = 0
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i]
  }
  for (let i = 0; i < arr2.length; i++) {
    suma += arr2[i]
  }
  console.log(sum + suma)
}
console.log(dosArrays(array1, array2))

