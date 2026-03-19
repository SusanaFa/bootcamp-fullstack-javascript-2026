//arreglos y ciclos

let nota1 = 5;
let nota2 = 6;
let nota3 = 7;

let notas = [5, 6, 7];
//posicion  [0, 1, 2];
console.log(notas[2]); // 7

let datos = ["a", "b", "c", "d", "e"];
// posicion [ 0 ,  1 ,  2 ,  3 ,  4 ]; -> index
// largo    [ 1 ,  2 ,  3 ,  4 ,  5 ]; -> length
console.log(datos[2]); // c

datos = [0, 1, 2]; //reasignación de una variable tipo let
console.log(datos[2]);

datos = "Hola"; //reasignación de una variable tipo let
console.log(datos);

const datos2 = [1, 2, 3, 3, 6, 7, 8, 3];
console.log(datos2[0]);
console.log(datos2.length);
console.log(datos2.lastIndexOf(3));

// agregar - eliminar

// | Método    | Acción  | Dónde  |
// | --------- | ------- | ------ |
// | push()    | Agrega  | Final  |
// | pop()     | Elimina | Final  |
// | shift()   | Elimina | Inicio |
// | unshift() | Agrega  | Inicio |

const datos3 = [1, 2, 3, 4, 5, 6, 7, 8, 3];

for (let i = 0; i < datos3.length; i++) {
  console.log(`posición i: ${i}`);
  console.log(`valor es: ${datos3[i]}`);
}

datos3.push(9);
console.log(datos3.length);
datos3.unshift(0);

datos3.unshift(2);
console.log(datos3[0]);
console.log(datos3.length);

// splice que sirve para insertar, eliminar y reemplazar elementos en cualquier posición del arreglo
// sintaxis: arreglo.splice(inicio(posicion), cantidad(cantidad de elementos afectados), elemento1, elemento2, elementoN)

// eliminando
datos3.splice(2, 2); //elimina 2 elementos desde el indice 2
// console.log(datos3);

// insertando
datos3.splice(2, 0, 4);
console.log(datos3);

//reemplzar
datos3.splice(7, 1, 9);
console.log(datos3);

const frutas = ["manzana", "pera", "uva"];
// posición    [    0   ,   1    ,   2  ];
// largo       [    1   ,   2    ,   3  ];

// eliminar
frutas.splice(2, 1);
console.log(frutas);

// insertar
frutas.splice(1, 0, "naranja");
console.log(frutas);

// reemplazar
frutas.splice(1, 1, "plátano");
console.log(frutas);

// concatenar arreglos
let arra = [1, 2, 3, 4];
let arrb = [2, 3, 4, 5, 6];

let arrConcatenado = arra.concat(arrb);
console.log(arrConcatenado);

// unir arreglos sin datos repetidos
let arrNewSet = [...new Set([...arra, ...arrb])];
console.log(arrNewSet);

// ejemplo de uso operador spread
let a = [1, 2, 3];
let b = [...a];

console.log(b);

// intersección y diferencia
let a1 = [1, 2, 3, 4];
let b1 = [2, 3, 4];

// intersección
let resultado = a1.filter((x) => b1.includes(x));
console.log(resultado);

// diferencia
let resultado2 = a1.filter((x) => !b1.includes(x));
console.log(resultado2);

// matrices
let matriz = [
  [1, 2],
  [3, 4],
];

// [ [1,2],
//   [3,4] ]

console.log(matriz[0][0]); // 1
console.log(matriz[0][1]); // 2
console.log(matriz[1][0]); // 3
console.log(matriz[1][1]); // 4

// ordenamiento burbuja
let arreglo = [64, 34, 25, 12, 22, 11, 90];

let n = arreglo.length; // longitud del arreglo

// Bucle externo: esto controla las vueltas
for (let i = 0; i < n - 1; i++) {
  // Bucle interno: esto compara elementos vecinos
  for (let j = 0; j < n - i - 1; j++) {
    // Si el actual es mayor que el siguiente → intercambiamos
    if (arreglo[j] > arreglo[j + 1]) {
      let temp = arreglo[j];
      arreglo[j] = arreglo[j + 1];
      arreglo[j + 1] = temp;
    }
  }

  // mostramos el estado del arreglo en cada iteración
  console.log("Pasada", i + 1, ":", arreglo);
}

console.log("Arreglo ordenado:", arreglo);
