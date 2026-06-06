import express from "express";
import fileUpload from "express-fileupload";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";

import webRoutes from "./routes/web.routes.js";
import apiRoutes from "./routes/index.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import ApiError from "./utils/ApiError.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    //limite de 2MB
    limits: { fileSize: 2 * 1024 * 1024 },
    //si el tamaño excede se rechaza la petición
    abortOnLimit: true,
  }),
);

const publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

//ruta específica para los archivos que luego vayamos subiendo
// /uploads/profiles/imagen-usuario.png
app.use("/uploads", express.static(path.join(publicPath, "uploads")));

app.use("/", webRoutes);

app.use("/api/v1", apiRoutes);

app.use((req, res, next) => {
  next(new ApiError(404, "Ruta no encontrada"));
});

app.use(errorMiddleware);

export default app;
