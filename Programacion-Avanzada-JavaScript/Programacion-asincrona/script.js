// 1- orden de ejecución
console.log("Inicio");

setTimeout(() => {
  console.log("Esto aparece después");
}, 2000);

console.log("Fin");

// 2- callback

function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

function despedir() {
  console.log("Hasta luego");
}

saludar("Susana", despedir);
despedir();

// 3- callback simular asincronía
function procesarPago(monto, callback) {
  console.log(`Procesando pago de $ ${monto}`);

  setTimeout(() => {
    console.log("Pago aprobado");
    callback(monto);
  }, 2000);
}

function mostrarBoleta(monto) {
  console.log(`Boleta generada por $ ${monto}`);
}

procesarPago(15000, mostrarBoleta);

// 4- promesa simple
const promesa = new Promise((resolve, reject) => {
  let exito = true;

  setTimeout(() => {
    if (!exito) {
      resolve("Datos cargados correctamente");
    } else {
      reject("Ocurrió un error");
    }
  }, 3000);
});

promesa
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.log(error));

//5- async/await
function obtenerDatos() {
  return new Promise((resolve, reject) => {
    let exito = true;

    setTimeout(() => {
      if (!exito) {
        resolve("Usuario logueado correctamente");
      } else {
        reject("Usuario no encontrado");
      }
    }, 2000);
  });
}

async function mostrarDatos() {
  try {
    const resultado = await obtenerDatos();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

mostrarDatos();

// 1.2 orden ejecucion
console.log("1- Inicio del programa");

setTimeout(() => {
  console.log("2- Este mensaje aparece después de 2 segundos");
}, 2000);

console.log("3- Este mensaje aparece antes que el setTimeout");

// 2.2 callback
function saludarUsuario(nombre, callback) {
  console.log(`Hola, ${nombre}`);
  callback();
}

function mostrarMensajefinal() {
  console.log("Bienvenido usuario");
}

saludarUsuario("Pedrito", mostrarMensajefinal);
