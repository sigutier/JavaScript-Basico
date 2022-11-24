let nombre = "Silvia";
let apellidos = "Gutierrez Rodriguez";
let estudiante = `${nombre} ${apellidos}`;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let len = estudiante.length;
console.log(len);

let first = nombre.charAt(0);
console.log(first);

let end = apellidos.charAt(apellidos.length - 1);
console.log(end);

// replace() usando una expresión Regex para reemplazar espacios en blanco
let espacios = estudiante.replace(/\s+/g, "");
console.log(espacios);

let bool = estudiante.includes(nombre);
console.log(bool);
