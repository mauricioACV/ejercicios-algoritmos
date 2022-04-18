console.clear();

const sentences = [
  "Mary read a story to Sam and Isla.",
  "Isla cuddled Sam.",
  "Sam chortled."
];

// **********************************************************************
// Validar si un string se encuentra en array de string (array sentences)
// **********************************************************************
console.log("*******************");

console.log(sentences[0].includes("Sam"));

// **********************************************************************
// Validar si un string se encuentra dentro de un arreglo de string
// **********************************************************************

// **********************************************************************
// frecuencia de un string (array sentences)
// **********************************************************************
console.log("*******************");

const splitSentences = sentences.map((item) => item.split(" "));
console.log(splitSentences);

splitSentences.forEach((item) => {
  item.forEach((item) => {
    const cleanItem = item.replace(".", "");
    if (cleanItem === "Sam") {
      console.log(cleanItem);
    }
  });
});

// **********************************************************************
// frecuencia de un string
// **********************************************************************

// **********************************************************************
// string a entero
// **********************************************************************
console.log("*******************");

const num = "20";
console.log(Number.parseInt(num, 10));

// **********************************************************************
// string a entero
// **********************************************************************

// **********************************************************************
// Fizz - Buzz
// **********************************************************************
console.log("*******************");

function fizzBuzz(num) {
  if (num % 15 === 0) {
    return "FizzBuzz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  return num;
}

// itero para evaluar fizz-buzz en los primeros 15 muneros
for (let i = 1; i <= 15; i++) {
  console.log(i, fizzBuzz(i));
}

// **********************************************************************
// Fizz - Buzz
// **********************************************************************

// **********************************************************************
// averiguar cual es el numero unico en el array
// **********************************************************************
console.log("*******************");

const arr = [1, 2, 3, 4, 3, 2, 1];

function uniqueNum(arr) {
  let unique = 0;
  arr.forEach((num) => {
    console.log(arr.filter((x) => x === num));
    const filtro = arr.filter((x) => x === num);
    if (filtro.length === 1) {
      unique = num;
    }
  });
  console.log("unico", unique);
}

uniqueNum(arr);

// **********************************************************************
// averiguar cual es el numero unico en el array
// **********************************************************************
