const boton = document.getElementById("btn");

boton.addEventListener("click", () => {
  alert("click en el botón");
});

//con jQuery
const boton2 = document.querySelector("#jquery");

$("#jquery").click(() => {
  alert("Hola, estoy utilizando jQuery");
});
