// SELECCIÓN DE ELEMENTOS DEL DOM

// El Document Object Model (DOM) representa la estructura HTML
// Aquí guardamos referencias a elementos que usaremos después

// buscamos el botón "Ir arriba"
// getElementById() busca un elemento por su atributo 'id'
const btnUp = document.getElementById("btnUp");

// botón para mostrar saludo
// Almacenamos el elemento en una constante para usarlo en los event listeners
const btnSaludo = document.getElementById("btnSaludo");

// texto que reaccionará al mouse
// Este elemento cambiará su apariencia cuando interactúemos con el mouse
const textoMouse = document.getElementById("textoMouse");

// EVENTO 1 - CLICK

// Un evento 'click' se dispara cuando el usuario hace clic en un elemento

// cuando el usuario haga clic en el botón saludo
// addEventListener() se "suscribe" a un evento específico del elemento
// "click" es el tipo de evento (hay muchos otros: mouseover, keypress, etc.)
btnSaludo.addEventListener("click", () => {
  // mostramos un mensaje en pantalla
  // alert() es una función nativa del navegador que muestra un cuadro de diálogo
  alert("Hola! Este es un evento de click en JavaScript");
});

// EVENTO 2 - MOUSEOVER Y MOUSEOUT

// Los eventos de mouse permiten detectar movimientos y posición del cursor

// cuando el mouse pase sobre el texto
// "mouseover" se dispara cuando el cursor entra en el área del elemento
textoMouse.addEventListener("mouseover", () => {
  // agregamos una clase CSS
  // classList es un objeto que contiene métodos para manejar clases CSS
  // add() añade una clase a la lista de clases del elemento
  textoMouse.classList.add("resaltado");
});

// cuando el mouse salga del texto
// "mouseout" se dispara cuando el cursor abandona el área del elemento
textoMouse.addEventListener("mouseout", () => {
  // quitamos la clase CSS
  // remove() elimina una clase de la lista de clases del elemento
  textoMouse.classList.remove("resaltado");
});

// EVENTO 3 - BOTÓN IR ARRIBA

// Este evento permite a los usuarios volver al principio de la página de forma fluida

// cuando el usuario hace clic en el botón
// Ejecutaremos código JavaScript cuando se haga clic
btnUp.addEventListener("click", () => {
  // usamos scrollTo para mover el scroll
  // scrollTo() es un método del objeto window que desplaza la página
  // top:0 significa la parte superior del documento
  // behavior:smooth crea el desplazamiento suave
  // (sin smooth: hace un salto instantáneo, con smooth: animación gradual)
  //   console.log("haciendo scroll");

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// EVENTO 4 - SCROLL
// El evento scroll se dispara continuamente mientras el usuario desplaza la página

// detecta cuando el usuario hace scroll en la página
// Este listener está en el objeto 'window' (la ventana del navegador completa)
// Se ejecuta muchas veces por segundo mientras se está haciendo scroll
window.addEventListener("scroll", () => {
  // mostramos en consola cuánto se ha desplazado la página
  // window.scrollY es una propiedad que devuelve el número de píxeles desplazados verticalmente
  // Si scrollY = 0: estás arriba. Si scrollY = 500: te has desplazado 500px hacia abajo
  // console.log() es útil para depuración y revisar datos en las herramientas de desarrollador (F12)
  console.log("Scroll actual:", window.scrollY);
});
