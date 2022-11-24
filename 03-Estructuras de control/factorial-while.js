const dato = 10; // Número del que queremos calcular el factorial
let result = 1;
let i = dato;

while (i > 0) {
  result *= i;
  i--;
}

console.log(result);
