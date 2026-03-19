//ejercicio práctico 1 - M3-L2

let diametro = parseFloat(prompt("Ingresa un diametro"));

if (isNaN(diametro) || diametro <= 0) {
  alert("debe ingresar un número válido");
} else {
  let radio = diametro / 2;

  let area = Math.PI * Math.pow(radio, 2);

  alert("el área del circulo es " + area.toFixed(4));
  console.log("el área del circulo es", area);
  console.log("el radio es", radio);
  resultado = document.getElementById("resultado");
  resultado.innerHTML = `el resultado es ${area}`;
}

// conectar a un index.html para poder ejecutar
