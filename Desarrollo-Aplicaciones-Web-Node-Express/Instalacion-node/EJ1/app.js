import http from "node:http";
import fs from "node:fs";
import express from "express";
import moment from "moment";
import yargs from "yargs";

import { hideBin } from "yargs/helpers";

//yargs
//process.argv contiene todo lo que escribimos en la terminal
//node app.js --modo=express --puerto=4000
const argv = yargs(hideBin(process.argv))
  .option("modo", {
    alias: "m",
    describe: "Define si usaremos node puro o express",
    choices: ["node", "express"],
    default: "express",
  })
  .option("puerto", {
    alias: "p",
    describe: "Puerto donde se levantará el servidor",
    type: "number",
    default: 3000,
  })
  .help().argv;

const PORT = argv.puerto;
const MODO = argv.modo;

const productos = [
  { id: 1, nombre: "Teclado", precio: 15000 },
  { id: 2, nombre: "Mouse", precio: 8000 },
  { id: 3, nombre: "Monitor", precio: 120000 },
];

function guardarVisita(ruta) {
  const nuevaVisita = {
    ruta: ruta,
    fecha: moment().format("DD-MM-YYYY HH:mm:ss"),
  };

  const archivo = "visitas.json";
  let visitas = [];

  if (fs.existsSync(archivo)) {
    const contenido = fs.readFileSync(archivo, "utf-8");
    if (contenido) {
      visitas = JSON.parse(contenido);
    }
  }

  visitas.push(nuevaVisita);
  fs.writeFileSync(archivo, JSON.stringify(visitas, null, 2));
}

//servidor con node puro
function iniciarServidorNodePuro() {
  const server = http.createServer((req, res) => {
    guardarVisita(req.url);

    res.setHeader("Content-Type", "application/json");
    if (req.url === "/") {
      res.end(
        JSON.stringify({
          mensaje: "Hola desde Node Puro",
          explicacion: "Aquí no estamos usando Express",
        }),
      );
    } else if (req.url === "/productos") {
      res.end(JSON.stringify(productos));
    } else {
      res.statusCode = 404;
      res.end(
        JSON.stringify({
          error: "Ruta no encontrada en Node Puro",
        }),
      );
    }
  });

  server.listen(PORT, () => {
    console.log(`Servidor con Node puro corriendo en http://localhost:${PORT}`);
  });
}

//servidor con express
function iniciarServidorExpress() {
  console.log("en express");

  const app = express();

  app.use((req, res, next) => {
    guardarVisita(req.url);
    next();
  });

  app.get("/", (req, res) => {
    console.log("en raiz");

    res.json({
      mensaje: "Hola desde Express",
      explicacion: "Express simplifica la creación de rutas y respuestas",
    });
  });

  app.get("/productos", (req, res) => {
    res.json(productos);
  });

  app.get("/productos/total", (req, res) => {
    const total = productos.reduce((acumulador, producto) => {
      return acumulador + producto.precio;
    }, 0);

    res.json({
      mensaje: "Total calculado correctamente",
      total: total,
    });
  });

  app.get("/fecha", (req, res) => {
    res.json({
      fechaActual: moment().format("DD-MM-YYYY"),
      horaActual: moment().format("HH:mm:ss"),
      mensaje: "Esta fecha fue generada con Moment()",
    });
  });

  app.get("/visitas", (req, res) => {
    const archivo = "visitas.json";

    //si el archivo no existe, respondemos con un arreglo
    if (!fs.existsSync(archivo)) {
      return res.json({
        mensaje: "Aun no hay visitas registradas",
        visitas: [],
      });
    }

    //si el archivo sí existe, lo vamos a leer
    const contenido = fs.readFileSync(archivo, "utf-8");

    const visitas = contenido ? JSON.parse(contenido) : [];

    res.json({
      cantidad: visitas.length,
      visitas: visitas,
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      error: "Ruta no encontrada en Express",
    });
  });

  app.listen(PORT, () => {
    console.log(`Servidor con Express corriendo en http://localhost:${PORT}`);
  });
}

if (MODO === "node") {
  iniciarServidorNodePuro();
} else {
  iniciarServidorExpress();
}
