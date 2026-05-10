# Módulo 6 - Lección 1

## Introducción a Node.js y primer servidor con Express

En esta lección comenzamos a trabajar con **Node.js**, un entorno que nos permite ejecutar JavaScript fuera del navegador.

Hasta ahora habíamos usado JavaScript principalmente en el navegador, junto con HTML y CSS. Con Node.js podemos usar JavaScript desde la terminal y también crear servidores web.

---

## Objetivos de la lección

- Comprender qué es Node.js.
- Ejecutar archivos JavaScript desde la terminal.
- Diferenciar JavaScript en el navegador y JavaScript en el servidor.
- Crear un primer archivo `app.js`.
- Crear un primer servidor usando Express. Revisar archivo `server.js`.
- Entender qué es una ruta.
- Levantar un servidor local y probarlo desde el navegador.

---

## Archivos trabajados

En esta lección se trabajaron dos archivos principales:

```txt

── Caracteristicas-node/
   ├── README.md
   ├── EJ1/
   │   ├── app.js
   │   └── package.json
   └── EJ2/
       ├── package.json
       ├── package-lock.json
       └── server.js



```

---

## EJ1 - Primer archivo ejecutado con Node

En el primer ejercicio usamos el archivo:

`app.js`

Este archivo contiene código JavaScript básico:

- mensajes con console.log();
- una variable;
- una función;
- una llamada a esa función.

La idea de este ejercicio es comprobar que podemos ejecutar JavaScript fuera del navegador usando Node.js.

### Cómo ejecutar el EJ1

- Desde la terminal, ingresar a la carpeta del ejercicio:

`cd EJ1`

- Luego ejecutar:

`node app.js`

Resultado esperado:

```
Hola desde Node
Estamos ejecutando JavaScript fuera del navegador
Hola, Susanita tiene un ratón. Bienvenido a Node
```

---

## EJ2 - Primer servidor con Express

En el segundo ejercicio usamos el archivo:

`server.js`

Este archivo crea un servidor básico con Express.

El servidor tiene varias rutas:

| Ruta        | Qué muestra          |
| ----------- | -------------------- |
| `/`         | Mensaje inicial      |
| `/saludo`   | Saludo personalizado |
| `/curso`    | Nombre del curso     |
| `/modulos`  | Lista de módulos     |
| `/contacto` | Correo de contacto   |

Archivos del EJ2
`server.js`

Contiene el código principal del servidor:

- importa Express;
- crea la aplicación;
- define el puerto 3000;
- crea rutas con app.get();
- levanta el servidor con app.listen().

`package.json`

Guarda la información del proyecto y sus dependencias.

En este ejercicio se usa Express, por eso aparece dentro de las dependencias.

`package-lock.json`

Guarda el detalle exacto de las versiones instaladas.
Este archivo permite que otras personas instalen las mismas dependencias de forma más consistente.

### Cómo ejecutar el EJ2

- Desde la terminal, ingresar a la carpeta del ejercicio:

`cd EJ2`

- Instalar las dependencias:

`npm install`

- Luego levantar el servidor:

`npm start`

- También se puede ejecutar directamente con:

`node server.js`

Si todo está correcto, la terminal mostrará:

`Servidor corriendo en http://localhost:3000`

### Cómo probar el servidor

Con el servidor encendido, abrir el navegador y visitar:

`http://localhost:3000/`

También se pueden probar estas rutas:

```
http://localhost:3000/saludo
http://localhost:3000/curso
http://localhost:3000/modulos
http://localhost:3000/contacto
```

### Cómo detener el servidor

Para detener el servidor desde la terminal:

`Ctrl + C`
