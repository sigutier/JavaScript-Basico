let num = 10; // Número del que queremos calcular el factorial
let factorial = 1;

while (num > 1) {
  factorial *= num;
  num--;
}

console.log(factorial); // Factorial de 10 = 3628800
