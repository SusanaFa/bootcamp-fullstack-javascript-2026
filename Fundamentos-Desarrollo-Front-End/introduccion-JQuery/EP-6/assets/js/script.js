$(document).ready(function () {
  $("#lista li").addClass("list-group-item text-success");

  // evento click para agregar elementos a la lista
  $("#agregar").click(() => {
    let texto = $("#input").val();

    if (texto === "") {
      alert("Debes escribir algo primero");
    } else {
      $("#lista").append(
        "<li class='list-group-item text-success'>" + texto + "</li>",
      );
      $("#input").val("");
    }
  });

  //   evento que oculta la lista con el btn ocultarLista
  $("#ocultarLista").click(function () {
    $("#lista").toggle();

    // this hace referencia al elemento que disparó el evento. En este caso, el btn con id ocultarLista mediante el evento click
    if ($(this).text().trim() === "Ocultar lista") {
      // quitamos la clase btn-primary que le da un color azul y lo cambiamos por un color mas gris con la clase btn-secondary

      $(this).removeClass("btn-primary").addClass("btn-secondary");
      //   cambiamos el texto de Ocultar lista a Mostrar lista
      $(this).text("Mostrar lista");
    } else {
      $(this).text("Ocultar lista");
      $(this).removeClass("btn-secondary").addClass("btn-primary");
    }
  });
});
