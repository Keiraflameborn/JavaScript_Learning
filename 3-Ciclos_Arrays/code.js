/**
 * Ciclos while, do while, for
 * Arrays
 */

let animal = 'perro'

let animals = ['perro', 'gato', 'mico', 'pez', 'lobo']

/*
let indice = 0;
while(indice < 4){
    console.log(animals[indice])
    indice = indice +1
    indice++ //es lo mismo que la línea de arriba
}

do {



}while(indice < 4)

let numbers = [5, 8, 30, 586, 45, 369]
let suma = 0;
for(let i = 0; i < numbers.length; i++){
    suma = suma + numbers[i]
    console.log(suma)
}
console.log(suma)

let numbers = [5, 8, 30, 586, 45, 369]
let suma = 0;
for(let i = 0; i < numbers.length; i++){
    suma +=  numbers[i]
    console.log(suma)
}
console.log(suma)
*/



let a = 2;
let b = 5;
let aux = 0;

aux = a;
a = b;
b = aux;
//console.log(a)
//console.log(b)

let numbers = [5, 8, 30, 586, 45, 369 ,2]
/*
let mayor = numbers[0];
let menor = numbers[0];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < menor){
        menor = numbers[i] 
    }
    if(numbers[i] > mayor){
        mayor = numbers[i] 
    }
}
console.log(mayor)
console.log(menor)


// crea un codigo que imprima los valores pares e impares que encuentre dentro de un arreglo

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
        console.table( numbers[i] + " No es par")
    }
}
    */
   /* si el valor del numero es multiplo de 3 debe imprimir fizz, si es multiplo de 5 debe imprimir bozz 
   si es multiplo de los coloca fizzbozz*/
 
let fizbuz = [];

for(let i = 0; i < 100; i++){
    fizbuz[i] = i + 1;
}
   
for(let i = 0; i < 100; i++){
    if(fizbuz[i] % 3 === 0){
        console.table(fizbuz[i] + " Fizz")
    }
    if(fizbuz[i] % 5 === 0){
        console.table(fizbuz[i] + " Bozz")
    }
    if(fizbuz[i] % 5 === 0 && fizbuz[i] % 3 === 0){
        console.table(fizbuz[i] + " Fizbozz")
    }
}



