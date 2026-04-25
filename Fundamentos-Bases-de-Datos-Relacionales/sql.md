1. Entrar y salir de PostgreSQL

| Comando                    | Significado                                                     | Qué hace                                                                      |
| -------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `psql -U postgres -p 5432` | `psql` = consola de PostgreSQL / `-U` = usuario / `-p` = puerto | Abre la consola de PostgreSQL usando el usuario indicado y el puerto indicado |
| `\q`                       | `q` = quit                                                      | Sale de `psql`                                                                |

Ejemplo
`psql -U postgres -p 5433 `

2. Ver y cambiar bases de datos

| Comando                      | Significado | Qué hace                                             |
| ---------------------------- | ----------- | ---------------------------------------------------- |
| `\l`                         | list        | Lista todas las bases de datos disponibles           |
| `\c nombre_bd`               | connect     | Cambia la conexión a otra base de datos              |
| `SELECT current_database();` | función SQL | Muestra la base de datos en la que estás actualmente |

Ejemplos
`\l`
`\c probando`
`SELECT current_database();`

3. Ver tablas y estructura

| Comando           | Significado                          | Qué hace                                                           |
| ----------------- | ------------------------------------ | ------------------------------------------------------------------ |
| `\dt`             | `d` = describe/display, `t` = tables | Lista las tablas de la base de datos actual                        |
| `\d nombre_tabla` | describe                             | Muestra la estructura de una tabla: columnas, tipos, restricciones |
| `\dn`             | namespaces                           | Lista los esquemas disponibles                                     |
| `\dt esquema.*`   | describe tables de un esquema        | Lista las tablas de un esquema específico                          |

Ejemplos
`\dt `
`\d productos`
`\dn`
`\dt public.*`

4. Consultar datos

| Comando                                 | Significado                      | Qué hace                                            |
| --------------------------------------- | -------------------------------- | --------------------------------------------------- |
| `SELECT * FROM tabla;`                  | seleccionar todo                 | Muestra todos los registros y columnas de una tabla |
| `SELECT columna1, columna2 FROM tabla;` | seleccionar columnas específicas | Muestra solo las columnas indicadas                 |
| `SELECT DISTINCT columna FROM tabla;`   | seleccionar distintos            | Muestra solo valores únicos, sin repetir            |
| `WHERE`                                 | condición                        | Filtra los registros                                |
| `ORDER BY`                              | ordenar por                      | Ordena resultados                                   |
| `LIMIT`                                 | límite                           | Limita la cantidad de filas mostradas               |

Ejemplos
`SELECT * FROM productos;`

`SELECT nombre, precio
FROM productos;`

`SELECT DISTINCT categoria
FROM productos;`

`SELECT *
FROM productos
WHERE precio > 10000;`

`SELECT nombre, precio
FROM productos
ORDER BY precio DESC;`

`SELECT *
FROM producto
LIMIT 5;`

5. Buscar con condiciones

| Comando               | Significado | Qué hace                             |
| --------------------- | ----------- | ------------------------------------ |
| `=`                   | igual       | Busca coincidencia exacta            |
| `<>` o `!=`           | distinto    | Busca valores diferentes             |
| `>` `<` `>=` `<=`     | comparación | Compara valores numéricos o fechas   |
| `LIKE`                | parecido a  | Busca patrones en texto              |
| `IN (...)`            | dentro de   | Busca valores incluidos en una lista |
| `BETWEEN ... AND ...` | entre       | Busca dentro de un rango             |
| `IS NULL`             | es nulo     | Busca valores vacíos/nulos           |

Ejemplos
`SELECT * FROM productos WHERE id = 1;`

`SELECT * FROM productos WHERE precio <> 9990;`

`SELECT * FROM productos WHERE precio BETWEEN 5000 AND 20000;`

`SELECT * FROM productos WHERE nombre LIKE '%mouse%';`

`SELECT * FROM productos WHERE categoria IN ('Periféricos', 'Audio');`

`SELECT * FROM productos WHERE descripcion IS NULL;`

6. Funciones útiles

| Comando         | Significado | Qué hace                     |
| --------------- | ----------- | ---------------------------- |
| `COUNT(*)`      | contar      | Cuenta registros             |
| `SUM(columna)`  | sumar       | Suma valores numéricos       |
| `AVG(columna)`  | average     | Calcula promedio             |
| `MAX(columna)`  | máximo      | Devuelve el mayor valor      |
| `MIN(columna)`  | mínimo      | Devuelve el menor valor      |
| `UPPER(texto)`  | mayúsculas  | Convierte texto a mayúsculas |
| `LOWER(texto)`  | minúsculas  | Convierte texto a minúsculas |
| `LENGTH(texto)` | longitud    | Cuenta caracteres            |

Ejemplos
`SELECT COUNT(*) FROM productos;`

`SELECT AVG(precio) FROM productos;`

`SELECT MAX(precio) FROM productos;`

`SELECT UPPER(nombre) FROM productos;`

`SELECT LENGTH(nombre) FROM productos;`

7. Agrupar resultados

| Comando    | Significado | Qué hace                               |
| ---------- | ----------- | -------------------------------------- |
| `GROUP BY` | agrupar por | Agrupa filas según una columna         |
| `HAVING`   | teniendo    | Filtra grupos después del agrupamiento |

Ejemplos
`SELECT categoria, COUNT(*) AS total
FROM productos
GROUP BY categoria;`

`SELECT categoria, AVG(precio) AS promedio
FROM productos
GROUP BY categoria
HAVING AVG(precio) > 10000;`

8. Relacionar tablas`

| Comando      | Significado     | Qué hace                                                               |
| ------------ | --------------- | ---------------------------------------------------------------------- |
| `INNER JOIN` | unión interna   | Trae solo coincidencias entre tablas                                   |
| `LEFT JOIN`  | unión izquierda | Trae todos los registros de la izquierda y coincidencias de la derecha |
| `ON`         | sobre           | Define la condición de unión                                           |

Ejemplos
`SELECT p.nombre, c.nombre AS categoria
FROM productos p
INNER JOIN categorias c
ON p.categoria_id = c.id;`

`SELECT c.nombre, p.nombre AS producto
FROM categorias c
LEFT JOIN productos p
ON c.id = p.categoria_id;`

9. Subconsultas

| Comando        | Significado | Qué hace                            |
| -------------- | ----------- | ----------------------------------- |
| `(SELECT ...)` | subconsulta | Ejecuta una consulta dentro de otra |

Ejemplos
`SELECT nombre, precio
FROM productos
WHERE precio > (
 SELECT AVG(precio) FROM productos
);`

10. Insertar, actualizar y borrar datos

| Comando       | Significado | Qué hace                      |
| ------------- | ----------- | ----------------------------- |
| `INSERT INTO` | insertar en | Agrega nuevos registros       |
| `UPDATE`      | actualizar  | Modifica registros existentes |
| `DELETE FROM` | eliminar de | Borra registros               |

Ejemplos
`INSERT INTO productos (nombre, precio, stock)
VALUES ('Mouse Gamer', 14990, 10);`

`INSERT INTO productos (nombre, precio, stock)
VALUES
 ('Teclado', 19990, 5),
 ('Monitor', 129990, 3),
('Webcam', 24990, 8);`

`UPDATE productos
SET precio = 15990
WHERE id = 1;`

`DELETE FROM productos
WHERE id = 3;`

11. Crear y eliminar estructuras

| Comando           | Significado         | Qué hace                                 |
| ----------------- | ------------------- | ---------------------------------------- |
| `CREATE DATABASE` | crear base de datos | Crea una nueva base                      |
| `CREATE TABLE`    | crear tabla         | Crea una tabla                           |
| `ALTER TABLE`     | alterar tabla       | Modifica la estructura de una tabla      |
| `DROP TABLE`      | eliminar tabla      | Borra una tabla completa                 |
| `TRUNCATE TABLE`  | truncar tabla       | Vacía una tabla sin borrar su estructura |

Ejemplos
`CREATE DATABASE prueba_sql;`

`CREATE TABLE productos (
 id SERIAL PRIMARY KEY,
 nombre VARCHAR(100) NOT NULL,
 precio NUMERIC(10,2) NOT NULL,
 stock INT DEFAULT 0
);`

`ALTER TABLE productos
ADD COLUMN categoria VARCHAR(50);`

`DROP TABLE productos;`

`TRUNCATE TABLE productos;`

12. Transacciones

| Comando     | Significado  | Qué hace                              |
| ----------- | ------------ | ------------------------------------- |
| `BEGIN;`    | comenzar     | Inicia una transacción                |
| `COMMIT;`   | confirmar    | Guarda los cambios                    |
| `ROLLBACK;` | volver atrás | Deshace los cambios de la transacción |

Ejemplo
`BEGIN;`

`UPDATE cuentas
SET saldo = saldo - 1000
WHERE id = 1;`

`UPDATE cuentas
SET saldo = saldo + 1000
WHERE id = 2;`

`COMMIT;`

Si algo sale mal
`ROLLBACK;`

13. Ayuda dentro de psql

| Comando     | Significado  | Qué hace                             |
| ----------- | ------------ | ------------------------------------ |
| `\?`        | help de psql | Muestra metacomandos de `psql`       |
| `\h`        | help de SQL  | Muestra ayuda de comandos SQL        |
| `\h SELECT` | help SELECT  | Muestra ayuda específica de `SELECT` |

Ejemplos
`\?`
`\h`
`\h SELECT`

Equivalencia mental con pgAdmin

| En consola (`psql`)          | En pgAdmin                                      |
| ---------------------------- | ----------------------------------------------- |
| `psql -U postgres -p 5433`   | Abrir pgAdmin y conectarse al servidor          |
| `\l`                         | Ver bases de datos en el panel lateral          |
| `\c probando`                | Hacer clic sobre la base de datos `probando`    |
| `\dt`                        | Ver `Schemas > public > Tables`                 |
| `\d productos`               | Clic derecho sobre tabla > Properties / Columns |
| `SELECT * FROM productos;`   | Abrir Query Tool y ejecutar consulta            |
| `CREATE TABLE ...`           | Query Tool o interfaz gráfica de creación       |
| `INSERT`, `UPDATE`, `DELETE` | Query Tool                                      |
