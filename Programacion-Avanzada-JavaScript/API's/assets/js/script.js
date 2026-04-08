// referencias del DOM
// btn
const btnPost = document.querySelector("#btnPost");
const btnPosts = document.querySelector("#btnPosts");
const btnError = document.querySelector("#btnError");
const btnCat = document.querySelector("#btnCat");
const btnPokemon = document.querySelector("#btnPokemon");
const btnUsuariosAsync = document.querySelector("#btnUsuariosAsync");
const btnJsonRaw = document.querySelector("#btnJsonRaw");

//input
const pokemonInput = document.querySelector("#pokemonInput");

// div
const resultadoPost = document.querySelector("#resultadoPost");
const resultadoPosts = document.querySelector("#resultadoPosts");
const resultadoError = document.querySelector("#resultadoError");
const resultadoCat = document.querySelector("#resultadoCat");
const resultadoPokemon = document.querySelector("#resultadoPokemon");
const resultadoUsuariosAsync = document.querySelector(
  "#resultadoUsuariosAsync",
);
const resultadoJsonRaw = document.querySelector("#resultadoJsonRaw");

// funciones auxiliares

// limpiar el contenido de un contenedor del DOM
// replaceChildren() elimina todos los nodos hijos del elemento
function limpiarContenido(elemento) {
  elemento.replaceChildren();
}

// crear un parrafo
function crearParrafo(texto, clase = "") {
  const p = document.createElement("p");
  p.textContent = texto;

  if (clase !== "") {
    p.classList.add(clase);
  }

  return p;
}

// mostrar un mensaje dentro de un contenedor
function mostrarMensajes(elemento, mensaje, clase = "") {
  limpiarContenido(elemento);
  const parrafo = crearParrafo(mensaje, clase);
  elemento.appendChild(parrafo);
}

// crea una tarjeta div
function crearTarjetas() {
  const div = document.createElement("div");
  div.classList.add("card-item");
  return div;
}

// crea un elemento con texto
function crearElementoTexto(tipo, texto) {
  const elemento = document.createElement(tipo);
  elemento.textContent = texto;
  return elemento;
}

// crear parrafo con etiqueta
function crearParrafoConEtiqueta(etiqueta, valor) {
  // ID: 5
  const p = document.createElement("p");
  const strong = document.createElement("strong");
  strong.textContent = etiqueta;

  p.appendChild(strong);
  p.appendChild(document.createTextNode(" " + valor));
  return p;
}

// crear imagen con src y alt
function crearImagen(src, alt) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  return img;
}

// 1- fetch básico- traer un solo post
btnPost.addEventListener("click", () => {
  limpiarContenido(resultadoPost);

  const url = "https://jsonplaceholder.typicode.com/posts/1";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      const tarjeta = crearTarjetas();
      const titulo = crearElementoTexto("h3", data.title);
      const cuerpo = crearElementoTexto("p", data.body);
      const id = crearParrafoConEtiqueta("ID:", data.id);
      const usuario = crearParrafoConEtiqueta("Usuario: ", data.userId);

      tarjeta.appendChild(titulo);
      tarjeta.appendChild(cuerpo);
      tarjeta.appendChild(id);
      tarjeta.appendChild(usuario);

      resultadoPost.appendChild(tarjeta);
    })
    .catch((error) => {
      mostrarMensajes(
        resultadoPost,
        "Ocurrió un error al traer el post.",
        "error",
      );

      console.error(error);
    });
});

// 2- fetch recorrer arreglo de datos - listar varios posts
btnPosts.addEventListener("click", () => {
  limpiarContenido(resultadoPosts);

  const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((posts) => {
      posts.forEach((post) => {
        const tarjeta = crearTarjetas();
        const titulo = crearElementoTexto("h3", post.title);
        const cuerpo = crearElementoTexto("p", post.body);
        const id = crearParrafoConEtiqueta("ID: ", post.id);

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(cuerpo);
        tarjeta.appendChild(id);

        resultadoPosts.appendChild(tarjeta);
      });
    })
    .catch((error) => {
      mostrarMensajes(
        resultadoPosts,
        "No fue posible cargar los posts.",
        "error",
      );

      console.error(error);
    });
});

// 3- Manejo errores con response.ok
btnError.addEventListener("click", () => {
  limpiarContenido(resultadoError);

  const url = "https://jsonplaceholder.typicode.com/postssss/1";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "La respuesta no fue exitosa. Status: " + response.status,
        );
      }

      return response.json();
    })
    .then((data) => {
      const tarjeta = crearTarjetas();
      const titulo = crearElementoTexto("h3", data.title);

      tarjeta.appendChild(titulo);
      resultadoError.appendChild(tarjeta);
    })
    .catch((error) => {
      mostrarMensajes(
        resultadoError,
        "Error controlado: " + error.message,
        "error",
      );
      console.error(error);
    });
});

// 4- api cat
btnCat.addEventListener("click", () => {
  limpiarContenido(resultadoCat);

  const url = "https://api.thecatapi.com/v1/images/search";
  const apikey = "DEMO-API-KEY";

  fetch(url, { headers: { "x-api-key": apikey } })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "No se pudo obtener el gatito. Status: ",
          response.status,
        );
      }
      return response.json();
    })
    .then((data) => {
      const imagenUrl = data[0].url;

      const tarjeta = crearTarjetas();
      const mensaje = crearParrafo("Gatito cargado correctamente", "success");
      const imagen = crearImagen(imagenUrl, "imagen de gatito");

      tarjeta.appendChild(mensaje);
      tarjeta.appendChild(imagen);

      resultadoCat.appendChild(tarjeta);
    })
    .catch((error) => {
      mostrarMensajes(
        resultadoCat,
        "Error al obtener el gatito: " + error.message,
        "error",
      );
      console.error(error);
    });
});

// 5- pokeapi
btnPokemon.addEventListener("click", () => {
  limpiarContenido(resultadoPokemon);
  const nombrePokemon = pokemonInput.value.trim().toLowerCase();
  if (nombrePokemon === "") {
    mostrarMensajes(
      resultadoPokemon,
      "Debes ingresar el nombre de un pokemon.",
      "error",
    );
    return;
  }

  const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemon no encontrado. Status: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      const nombre = data.name.toUpperCase();
      const imagen = data.sprites.front_default;
      const altura = data.height;
      const peso = data.weight;

      const tipos = data.types
        .map((tipo) => {
          return tipo.type.name;
        })
        .join(",");

      const tarjeta = crearTarjetas();
      const titulo = crearElementoTexto("h3", nombre);
      const imagenPokemon = crearImagen(imagen, data.name);
      const alturaTexto = crearParrafoConEtiqueta("Altura:", altura);
      const pesoTexto = crearParrafoConEtiqueta("Peso:", peso);
      const tipoTexto = crearParrafoConEtiqueta("Tipo(s):", tipos);

      tarjeta.appendChild(titulo);
      tarjeta.appendChild(imagenPokemon);
      tarjeta.appendChild(alturaTexto);
      tarjeta.appendChild(pesoTexto);
      tarjeta.appendChild(tipoTexto);

      resultadoPokemon.appendChild(tarjeta);
    })
    .catch((error) => {
      mostrarMensajes(resultadoPokemon, error.message, "error");
      console.error(error);
    });
});

// 6- async/await
btnUsuariosAsync.addEventListener("click", async () => {
  limpiarContenido(resultadoUsuariosAsync);

  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        "No se pudieron cargar los usuarios. Status: " + response.status,
      );
    }

    const data = await response.json();

    data.forEach(function (usuario) {
      const tarjeta = crearTarjetas();

      const nombre = crearElementoTexto("h3", usuario.name);
      const email = crearParrafoConEtiqueta("Email:", usuario.email);
      const ciudad = crearParrafoConEtiqueta("Ciudad:", usuario.address.city);
      const empresa = crearParrafoConEtiqueta("Empresa:", usuario.company.name);

      tarjeta.appendChild(nombre);
      tarjeta.appendChild(email);
      tarjeta.appendChild(ciudad);
      tarjeta.appendChild(empresa);

      resultadoUsuariosAsync.appendChild(tarjeta);
    });
  } catch (error) {
    mostrarMensajes(
      resultadoUsuariosAsync,
      "Error al cargar usuarios con async/await: " + error.message,
      "error",
    );
    console.error(error);
  }
});

// 7- ver JSON en pantalla
btnJsonRaw.addEventListener("click", async function () {
  resultadoJsonRaw.textContent = "";

  const url = "https://jsonplaceholder.typicode.com/todos/1";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        "No se pudo obtener el recurso. Status: " + response.status,
      );
    }

    const data = await response.json();

    // En este caso sí usamos textContent porque queremos mostrar texto plano,
    // no crear etiquetas HTML.
    resultadoJsonRaw.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    resultadoJsonRaw.textContent = "Error: " + error.message;
    console.error(error);
  }
});
