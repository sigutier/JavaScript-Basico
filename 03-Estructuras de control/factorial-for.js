const dato = 10; // Número del que queremos calcular el factorial
let result = 1;

for (let i = dato; i > 0; i--) {
  result *= i;
}

console.log(result);
