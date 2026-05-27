# Rutas disponibles - API Productos y Movimientos con ORM

Puedes probar estas rutas usando Thunder Client, Postman o cualquier cliente HTTP.

Para las rutas `POST` y `PUT`, recuerda configurar el body como JSON y agregar el encabezado:

```http
Content-Type: application/json
```

##

Base URL local:

```txt
http://localhost:3000
```

---

## Ruta inicial

### GET `/`

Permite comprobar que el servidor está funcionando correctamente.

**URL:**

```http
GET http://localhost:3000/
```

**Body:**  
No requiere body.

**Respuesta esperada:**

```txt
Servidor funcionando correctamente
```

---

# Productos

## 1. Obtener todos los productos

### GET `/productos`

Obtiene todos los productos registrados.

**URL:**

```http
GET http://localhost:3000/productos
```

**Body:**  
No requiere body.

---

## 2. Buscar producto por id

### GET `/productos/:id`

Obtiene un producto específico según su `id`.

**URL de ejemplo:**

```http
GET http://localhost:3000/productos/1
```

**Body:**  
No requiere body.

---

## 3. Buscar productos por nombre o descripción

### GET `/productos/buscar/:nombre`

Busca productos cuya descripción contenga el texto indicado.

**URL de ejemplo:**

```http
GET http://localhost:3000/productos/buscar/mouse
```

**Body:**  
No requiere body.

---

## 4. Obtener un producto con sus movimientos

### GET `/productos/:id/movimientos`

Obtiene un producto específico junto con todos sus movimientos asociados.

**URL de ejemplo:**

```http
GET http://localhost:3000/productos/1/movimientos
```

**Body:**  
No requiere body.

**Respuesta esperada aproximada:**

```json
{
  "id": 1,
  "descripcion": "Teclado mecánico",
  "cantidad": 10,
  "movimientos": [
    {
      "id": 1,
      "producto_id": 1,
      "cantidad": 5,
      "tipo": "ENTRADA",
      "fecha": "2026-05-26T..."
    }
  ]
}
```

---

## 5. Crear un producto

### POST `/productos`

Crea un nuevo producto.

**URL:**

```http
POST http://localhost:3000/productos
```

**Body:**

```json
{
  "descripcion": "Audífonos Bluetooth",
  "cantidad": 15
}
```

**Reglas básicas:**

- `descripcion` es obligatoria.
- `cantidad` es obligatoria.
- `cantidad` debe ser numérica.
- `cantidad` no puede ser negativa.

---

## 6. Actualizar un producto

### PUT `/productos/:id`

Actualiza la información de un producto existente.

**URL de ejemplo:**

```http
PUT http://localhost:3000/productos/1
```

**Body:**

```json
{
  "descripcion": "Teclado mecánico RGB",
  "cantidad": 20
}
```

**Reglas básicas:**

- `id` debe ser numérico.
- `descripcion` es obligatoria.
- `cantidad` es obligatoria.
- `cantidad` debe ser numérica.
- `cantidad` no puede ser negativa.

---

## 7. Eliminar un producto

### DELETE `/productos/:id`

Elimina un producto según su `id`.

**URL de ejemplo:**

```http
DELETE http://localhost:3000/productos/1
```

**Body:**  
No requiere body.

---

# Movimientos

## 8. Obtener todos los movimientos

### GET `/movimientos`

Obtiene todos los movimientos registrados, incluyendo el producto asociado.

**URL:**

```http
GET http://localhost:3000/movimientos
```

**Body:**  
No requiere body.

**Respuesta esperada aproximada:**

```json
[
  {
    "id": 1,
    "producto_id": 1,
    "cantidad": 5,
    "tipo": "ENTRADA",
    "fecha": "2026-05-26T...",
    "producto": {
      "id": 1,
      "descripcion": "Teclado mecánico",
      "cantidad": 15
    }
  }
]
```

---

## 9. Registrar entrada de inventario

### POST `/movimientos/entrada`

Registra una entrada de stock para un producto existente.

**URL:**

```http
POST http://localhost:3000/movimientos/entrada
```

**Body:**

```json
{
  "productoId": 1,
  "cantidad": 5
}
```

**Qué hace esta ruta:**

1. Busca el producto por `productoId`.
2. Valida que el producto exista.
3. Crea un movimiento de tipo `ENTRADA`.
4. Aumenta la cantidad disponible del producto.
5. Confirma la operación usando una transacción.

**Reglas básicas:**

- `productoId` es obligatorio.
- `cantidad` es obligatoria.
- Ambos deben ser valores numéricos.
- `cantidad` debe ser mayor a cero.

---

## 10. Registrar salida de inventario

### POST `/movimientos/salida`

Registra una salida de stock para un producto existente.

**URL:**

```http
POST http://localhost:3000/movimientos/salida
```

**Body:**

```json
{
  "productoId": 1,
  "cantidad": 2
}
```

**Qué hace esta ruta:**

1. Busca el producto por `productoId`.
2. Valida que el producto exista.
3. Valida que exista cantidad suficiente.
4. Crea un movimiento de tipo `SALIDA`.
5. Descuenta la cantidad disponible del producto.
6. Confirma la operación usando una transacción.

**Reglas básicas:**

- `productoId` es obligatorio.
- `cantidad` es obligatoria.
- Ambos deben ser valores numéricos.
- `cantidad` debe ser mayor a cero.
- La cantidad solicitada no puede superar la cantidad disponible del producto.

---

# Resumen rápido de rutas

| Método | Ruta                         | Descripción                              | Body |
| ------ | ---------------------------- | ---------------------------------------- | ---- |
| GET    | `/`                          | Probar servidor                          | No   |
| GET    | `/productos`                 | Listar productos                         | No   |
| GET    | `/productos/:id`             | Buscar producto por id                   | No   |
| GET    | `/productos/buscar/:nombre`  | Buscar productos por descripción         | No   |
| GET    | `/productos/:id/movimientos` | Ver producto con movimientos             | No   |
| POST   | `/productos`                 | Crear producto                           | Sí   |
| PUT    | `/productos/:id`             | Actualizar producto                      | Sí   |
| DELETE | `/productos/:id`             | Eliminar producto                        | No   |
| GET    | `/movimientos`               | Listar movimientos con producto asociado | No   |
| POST   | `/movimientos/entrada`       | Registrar entrada de inventario          | Sí   |
| POST   | `/movimientos/salida`        | Registrar salida de inventario           | Sí   |

---

# Bodies de ejemplo

## Crear producto

```json
{
  "descripcion": "Audífonos Bluetooth",
  "cantidad": 15
}
```

## Actualizar producto

```json
{
  "descripcion": "Audífonos Bluetooth Pro",
  "cantidad": 20
}
```

## Registrar entrada

```json
{
  "productoId": 1,
  "cantidad": 5
}
```

## Registrar salida

```json
{
  "productoId": 1,
  "cantidad": 2
}
```

---
