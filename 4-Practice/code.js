let numbers = []

for(let i = 0; i < 50; i++){
    numbers[i] = i+1;
}
/*Crear dos nuevos arreglos a partir del primero. El primer arreglo debe tener los numeros pares 
y el segundo los impares*/
/*
let pares = []
let impares = []

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0){
        impares.push(numbers[i])
    }
    else{
        pares.push(numbers[i])
    }
}
console.log(pares)
console.log(impares)
*/
/* crear un arreglo a partir de un texto y cambiar la letra "a" por letras "o" y al contrario
y volverla a convertir en texto*/
let texto = 'juanito bonito'
//let final = 'juonita banita'
let newText = texto.split('')
let conjunto = newText

for(let i = 0; i < newText.length; i++){
    if(newText[i] === "a"){
        newText[i] = "o"
    }
    else if(newText[i] === "o"){
        newText[i] = "a"
    }

}
let resultado = '';
for(let i = 0; i < newText.length; i++){
    resultado += newText[i]
}

