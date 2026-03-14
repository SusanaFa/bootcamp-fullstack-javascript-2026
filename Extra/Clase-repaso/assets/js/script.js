$(document).ready(function () {
  // mostrar todas las card
  $("#btnTodos").click(function () {
    $(".gallery-item").show();
  });

  // mostrar solo los chocolates
  $("#btnChocolates").click(function () {
    $(".gallery-item").hide();

    $(".chocolate").show();
  });

  //   mostrar solo los postres
  $("#btnPostres").click(function () {
    $(".gallery-item").hide();
    $(".postres").show();
  });

  // mostrar solo las bebidas
  $("#btnBebidas").click(function () {
    $(".gallery-item").hide();
    $(".bebidas").show();
  });
});
