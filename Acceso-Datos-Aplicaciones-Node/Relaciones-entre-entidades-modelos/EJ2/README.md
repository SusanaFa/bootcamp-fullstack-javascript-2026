# Estructura inicial del proyecto

Proyecto: **m7-l6-orm-relaciones**

```txt
m7-l6-orm-relaciones/
│
├── app.js
├── package.json
├── .env
├── .gitignore
│
├── config/
│   └── database.js
│
├── models/
│   ├── Producto.js
│   ├── Movimiento.js
│   └── index.js
│
├── routes/
│   ├── productos.routes.js
│   └── movimientos.routes.js
│
├── controllers/
│   ├── productos.controller.js
│   └── movimientos.controller.js
│
└── services/
    ├── productos.service.js
    └── movimientos.service.js
```

---

# Crear el proyecto

Desde la terminal, ejecutar:

```bash
mkdir m7-l6-orm-relaciones
cd m7-l6-orm-relaciones
npm init -y
```

---

# Instalar dependencias

Instalar las dependencias principales:

```bash
npm install express sequelize pg pg-hstore dotenv
```

Instalar dependencia de desarrollo:

```bash
npm install --save-dev nodemon
```

---

# Crear carpetas y archivos

## Crear carpetas

```bash
mkdir config models routes controllers services
```

## nota importante antes de continuar al próximo paso:

Si estás usando Git Bash:

```bash
touch app.js
```

Si estás usando CMD:

```bash
type nul > app.js
```

Si estás usando PowerShell:

```bash
New-Item app.js -ItemType File
```

## Crear archivos principales

```bash
touch app.js .env .gitignore
```

## Crear archivos de configuración

```bash
touch config/database.js
```

## Crear modelos

```bash
touch models/Producto.js
touch models/Movimiento.js
touch models/index.js
```

## Crear rutas

```bash
touch routes/productos.routes.js
touch routes/movimientos.routes.js
```

## Crear controladores

```bash
touch controllers/productos.controller.js
touch controllers/movimientos.controller.js
```

## Crear servicios

```bash
touch services/productos.service.js
touch services/movimientos.service.js
```

---

# Dependencias utilizadas

| Dependencia | Uso                                                 |
| ----------- | --------------------------------------------------- |
| `express`   | Crear el servidor y definir rutas                   |
| `sequelize` | ORM para trabajar con la base de datos              |
| `pg`        | Driver para conectar Node.js con PostgreSQL         |
| `pg-hstore` | Soporte requerido por Sequelize para PostgreSQL     |
| `dotenv`    | Leer variables de entorno desde `.env`              |
| `nodemon`   | Reiniciar el servidor automáticamente en desarrollo |

---

# Scripts recomendados en `package.json`

Agregar o ajustar la sección `scripts`:

```json
{
  "scripts": {
    "dev": "nodemon app.js",
    "start": "node app.js"
  }
}
```

También asegurarse de incluir:

```json
{
  "type": "module"
}
```

---

# Comando para ejecutar el servidor en desarrollo

```bash
npm run dev
```
