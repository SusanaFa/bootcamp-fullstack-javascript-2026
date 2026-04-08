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

// 3.2 Callback asíncrono
function registrarUsuario(nombre, callback) {
  console.log(`Registrando usuario: ${nombre} ...`);

  setTimeout(() => {
    console.log("Usuario registrado correctamente");
    callback(nombre);
  }, 2000);
}

function enviarBienvenida(nombre) {
  console.log(`Bienvenido/a, ${nombre}`);
}

registrarUsuario("Lorna", enviarBienvenida);

// 4.2 Promesas simples
const cargarPerfil = new Promise((resolve, reject) => {
  const exito = false;

  setTimeout(() => {
    if (!exito) {
      resolve("Perfil cargado correctamente");
    } else {
      reject("No fue posible cargar el perfil");
    }
  }, 2000);
});

cargarPerfil
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });

// 4.3 función que retorna promesa

function validarStock(producto) {
  return new Promise((resolve, reject) => {
    const stockDisponible = true;

    setTimeout(() => {
      if (!stockDisponible) {
        resolve(`Stock disponible para ${producto}`);
      } else {
        reject(`No hay stock para ${producto}`);
      }
    }, 1500);
  });
}

validarStock("Mouse")
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  });

// 5.2 Async/Await

function obtenerNotas() {
  return new Promise((resolve, reject) => {
    const hayDatos = true;

    setTimeout(() => {
      if (hayDatos) {
        resolve([5.5, 6.0, 4.3]);
      } else {
        reject("No se pudieron obtener las notas");
      }
    }, 2000);
  });
}

async function mostrarNotas() {
  try {
    const notas = await obtenerNotas();
    console.log(`Notas obtenidas: ${notas}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

mostrarNotas();

// 4.4 promesas

function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    // validacion 1- que sí exista un valor
    if (id === null || id === undefined || id === "") {
      reject("Debe ingresar un id válido");
      return;
    }

    // validacion 2- que sea un número
    if (isNaN(id)) {
      reject("El id debe ser numérico");
      return;
    }

    setTimeout(() => {
      if (Number(id) === 1) {
        resolve({
          id: 1,
          nombre: "Carla",
          correo: "carlaprueba@algo.com",
        });
      } else {
        reject("Usuario no encontrado");
      }
    }, 2000);
  });
}

// buscarUsuario(null)
//   .then((usuario) => {
//     console.log(`Usuario encontrado: ${usuario}`);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

// Async/Await
async function ejecutarPromesa(id) {
  try {
    const usuario = await buscarUsuario(id);
    console.log(`Resultado con Async/Await ${usuario}`);
  } catch (error) {
    console.log(`Error capturado con async/await: ${error}`);
  }
}

ejecutarPromesa(1);

// mix - asincronía , validaciones, con parametros de entrada
function procesarCompra(producto, cantidad) {
  return new Promise((resolve, reject) => {
    // trim. sirve para evitar que " " se consideren como texto válido
    if (!producto || producto.trim() === "") {
      reject("Debe ingresar un nombre de producto válido");
      return;
    }
    // validar cantidad
    if (cantidad === null || cantidad === undefined || isNaN(cantidad)) {
      reject("La cantidad debe ser numérica");
      return;
    }

    if (Number(cantidad) <= 0) {
      reject("La cantidad debe ser mayor que cero");
      return;
    }

    setTimeout(() => {
      resolve(`Compra registrada: ${producto} X ${cantidad} unidades`);
    }, 2000);
  });
}

async function ejecutarCompra(producto, cantidad) {
  try {
    const resultado = await procesarCompra(producto, cantidad);
    console.log(resultado);
  } catch (error) {
    console.log(`No fue posible completar la compra: ${error}`);
  }
}

ejecutarCompra("Mouse", 2);
// ejecutarCompra(null, 2);
