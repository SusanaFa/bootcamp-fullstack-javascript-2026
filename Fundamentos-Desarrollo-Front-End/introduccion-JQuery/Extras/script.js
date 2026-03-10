//ejemplos/script.js

// $("#contenido") permite seleccionar el elemento con id "contenido"
// html permite agregar contenido a un elemento
// $("#contenido").html("<strong> Hola, clase </strong>");
// $("#contenido").html("<div> Hola, clase </div>");
// $("#contenido").html("<img src='gato.png' alt='Foto de un gato'>");

// text permite agregar texto a un elemento
// $("#contenido").text(" Hola a todos");
// $("#contenido").text("<div> Hola, clase </div>");

// attr permite agregar atributos a un elemento
$("#foto").attr("src", "perro.png");
$("#foto").attr("alt", "Foto de un perro");

// css permite agregar o manipular estilos a un elemento
$("#caja").width(200);
$("#caja").height(100);

// width y height permiten obtener el ancho y alto de un elemento
let anchoCaja = $("#caja").width();
console.log(anchoCaja);

$("#caja").css("background-color", "red");

$("#caja").css({
  border: "5px solid black",
  padding: "20px",
  margin: "10px",
});

$("#caja").addClass("mi-clase");
$("#caja").removeClass("mi-clase");
$("#caja").toggleClass("mi-clase");

$("#input").val("Susanita tiene un ratón");

let valueInput = $("#input").val();
console.log(valueInput);

// if (valueInput === "Susanita tiene un ratón") {
//   alert("El valor del input es correcto");
// } else {
//   alert("El valor del input es incorrecto");
// }

// $("#lista").append("<li> JQuery </li>");
// $("#lista").append("<li> GITHUB </li>");

$("#lista").prepend("<li> Bootstrap </li> ");

$("#lista").before("<p> Introduccion a Front End </p>");

$("#lista").after("<p> Fin del curso </p>");
// $("#lista").after("<button> agregar </button>");

// $("elemento").evento(function () {
//   // toda la logica que se ejecuta cuando se dispara el evento
// });

// $("#btn").click(() => {
//   alert("Se hizo click en el botón");
//   $("#lista").append("<li> JQuery </li>");
// });

// evento click al boton  de agregar elementos
$("#btn").click(() => {
  // otengo el valor del input
  let nuevoElemento = $("#input").val();

  // agrego el nuevo elemento a la lista, con el valor del input
  $("#lista").append("<li>" + nuevoElemento + "</li>");
  // limpio el valor del input
  $("#input").val("");
  // levanto una alerta con el nuevo elemento agregado
  alert("Se agregó el elemento: " + nuevoElemento);
});

// evento click al boton de toggler
$("#btnToggler").click(() => {
  // alternar la visibilidad de la caja
  $("#caja").toggle();
});

// hide() -> ocultar un elemento
// show() -> mostrar un elemento
// toggle() -> alternar la visibilidad de un elemento

// pasamos el valor del input al elemento contenido a medida que lo vamos ingresando
$("#input").keyup(() => {
  // capturamos el valor del input
  let texto = $("#input").val();
  // lo agregamos dinamicamente al elemento contenido
  $("#contenido").text(texto);
});

$("li").css("color", "blue");

$("li").click(function () {
  $(this).css("color", "red");
});
