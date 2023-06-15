// Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbers = [1, 2, 3, 4];

numbers.forEach((number, index) => {
console.log(number * index); 
});

// Crea una función que reciba un array de números y devuelva cada número dividido por su índice en el array más 2

const sumNumbers = [ 4, 6,8];

sumNumbers.forEach ((number, index) =>{
    console.log(number / index + 2);
});

// Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const  words = [ 'hola', 'adios' ];

const result = words.map(word => {
	return word.toUpperCase();
});

console.log(result); 

    
