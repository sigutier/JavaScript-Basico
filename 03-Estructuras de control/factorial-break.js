const dato = 10; // Número del que queremos calcular el factorial
let result = 1;
let i = dato;

while (i) {
  result *= i;
  i--;
  if (i <= 1) {
    break;
  }
}

console.log(result);
