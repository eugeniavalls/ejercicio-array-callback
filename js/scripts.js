// Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numbersArray = numbers => {
  numbers.forEach((number, index) => {
    console.log(number * index);
  });
};

numbersArray([1, 2, 3, 4]);

// Crea una función que reciba un array de números y devuelva cada número dividido por su índice en el array más 2
const sumNumbers = numbers => {
  numbers.forEach((number, index) => {
    console.log(number / index + 2);
  });
};

sumNumbers([4, 6, 8]);

// Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const words = word => {
  const result = word.map(word => {
    return word.toUpperCase();
  });

  console.log(result);
};
words(['hola', 'adios']);

// Crea una función que reciba un array de palabras y una letra. La función devolerá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const wordsArray = (words, letter) => {
  const result = words.filter(word => {
    return word.startsWith(letter);
  });

  if (result.length) {
    console.log(result);
  } else {
    console.log('Ninguna palabra coincide con la letra ');
  }
};

wordsArray(['hola', 'adios', 'hasta luego'], 'h');

// Añade a la función anterior que el filtro funcione independientemente de mayusculas o minúsculas.

const wordsArray2 = (words, letter) => {
  const result = words.filter(word => {
    return word.toLowerCase().startsWith(letter.toLowerCase());
  });

  if (result.length) {
    console.log(result);
  } else {
    console.log('Ninguna palabra coincide con la letra ');
  }
};

wordsArray2(['Eugenia', 'elefante', 'sol'], 'E');

// Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const tenArrays = numbers => {
  let result = 0;
  numbers.forEach(number => {
    result = number + result;
  });
  console.log(result);
};

tenArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

// Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".
//   Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)

const squareAndCube = numbers => {
  numbers.forEach(number => {
    const squareNumber = Math.pow(number, 2);
    const cubeNumber = Math.pow(number, 3);
    console.log(
      `Número: ${number} - Cuadrado: ${squareNumber} - Cubo: ${cubeNumber}`
    );
  });
};
squareAndCube([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula. Nota, el método split() de los strings, convierte un string en un array.
const vowels = ['a', 'e', 'i', 'o', 'u'];
const towelsUpper = word => {
  const result = word.split('').map(letter => {
    if (vowels.includes(letter)) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  });
  console.log(result.join(''));
};

towelsUpper('eugenia');

// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". Nota: revisa la documentación de arrays, se puede hacer en una línea https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

const reverseWord = word => {
  const result = word.split('').reverse().join('');
  console.log(result);
};

reverseWord('Mariposas');

// Crea una función que reciba un array de 10 números. Dentro de esa función crea dos arrays llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenOddNumbers = numbers => {
  const finalArray = numbers.map(number => {
    const randomNumber = Math.floor(Math.random() * numbers.length);
    const multiply = number * randomNumber;
    return multiply;
  });

  const even = finalArray.filter(number => number % 2 === 0);

  const odd = finalArray.filter(number => number % 2 !== 0);
  console.log(finalArray);
  console.log(odd);
  console.log(even);
};
evenOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Crea una función que reciba un array con 5 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato', 'perro', 'casa'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O', 'P','O', 'C', 'A']

const initialLetterArray = words => {
  const finalResult = words.flatMap(word => {
    let result = [
      word.charAt(0).toUpperCase(),
      word.charAt(word.length - 1).toUpperCase()
    ];
    return result;
  });
  console.log(finalResult);
};
initialLetterArray(['hola', 'adios', 'gato', 'perro', 'casa']);

// Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const tenNumbers = numbers => {
  const finalResult = numbers.some(number => number > 5);

  console.log(finalResult);
};
tenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const wordsNumberLength = (words, number) => {
  const finalResult = words.filter(word => word.length === number);

  console.log(finalResult);
};

wordsNumberLength(['hola', 'adios', 'gato', 'perro', 'casa'], 4);

// Crea una función que reciba un array de nombres y te devuelva un array con los nombres que empiecen por 'A'

const namesA = names => {
  const finalResult = names.filter(name => name.toLowerCase().startsWith('a'));

  console.log(finalResult);
};
namesA(['Ana', 'Olga', 'Alberto', 'Eugenia', 'Alicia']);

// Crea una función que reciba un array similar a este y te devuelva sólo los usuarios cuya edad sea menor de 30
const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
];

const ageNumber = array => {
  const finalResult = array.filter(user => user.age < 30);

  console.log(finalResult);
};
ageNumber(users);

// Crea una función que reciba un array relleno con números pares y te diga si todos son pares o no

const pairNumbers = numbers => {
  const finalResult = numbers.every(number => number % 2 === 0);

  console.log(finalResult);
};

pairNumbers([2, 4, 6, 8, 10, 12]);

// Crea una función que reciba un array de números desordenados y los muestre por consola ordenados de mayor a menor.

const jumbledNumbers = numbers => {
  const finalResult = numbers.sort((a, b) => a - b);

  console.log(finalResult);
};

jumbledNumbers([1, 7, 3, 8, 9, 12, 4]);

// Repite el ejercicio anterior pero con los números de menor a mayor.

const jumbledNumbers2 = numbers => {
  const finalResult = numbers.sort((a, b) => b - a);
  console.log(finalResult);
};
jumbledNumbers2([1, 7, 3, 8, 9, 12, 4]);

// Crea una función que reciba un array de 5 palabras y las ordene alfabéticamente.

const wordsOrder = words => {
  const finalResult = words.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  console.log(finalResult);
};
wordsOrder(['arbol', 'balón', 'diana', 'césped']);

// Crea una función que reciba un array de 5 palabras y las ordene alfabeticamente de forma inversa.

const wordsOrder2 = words => {
  const finalResult = words.sort((a, b) => {
    if (a > b) return -1;
    if (a < b) return 11;
    return 0;
  });

  console.log(finalResult);
};
wordsOrder2(['arbol', 'balón', 'diana', 'césped']);
