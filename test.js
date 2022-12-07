console.log("start");
/* const ref = setInterval(() => {
  console.log("Hello world!");
}, 1000);

setTimeout(() => {
  clearInterval(ref);
}, 10000); */

function falsaPetitionHttps() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 > 8) {
        const toto = {
          nombre: "Silvia",
          id: 545465151561,
        };
        resolve(toto);
      } else {
        reject(new Error("Este usuario no existe!"));
      }
    }, 2000);
  });
  return promise;
}

function buscarUsuario() {
  falsaPetitionHttps()
    .then((usuario) => {
      console.log(usuario);
    })
    .catch((err) => {
      return falsaPetitionHttps();
    })
    .then((usuario) => {
      console.log(usuario);
    })
    .catch((err) => {
      console.log("ultimo intento");
    });
}

async function newBuscarUsuario() {
  while (true) {
    try {
      const usuario = await falsaPetitionHttps();
      return usuario;
    } catch (err) {
      console.log(err);
    }
  }
}

const cargarDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const res = await fetch(url);
  const datos = await res.json();
  console.log(datos);
};

async function main() {
  /* const usurario = await newBuscarUsuario();
  console.log(usurario); */
  await cargarDatos();
}

main();
