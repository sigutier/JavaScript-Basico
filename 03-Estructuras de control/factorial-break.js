let num = 10; // Número del que queremos calcular el factorial
let factorial = 1;

while (true) {
  factorial *= num;
  num--;
  if (num === 1) break;
}

console.log(factorial); // Factorial de 10 = 3628800
