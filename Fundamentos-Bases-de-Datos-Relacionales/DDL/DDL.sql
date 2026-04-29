-- DDL PARTE 1
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS pedidos;

-- Creación de tablas
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100),
    edad INTEGER,
    fecha_registro DATE
);


CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    fecha DATE NOT NULL,
    total INTEGER NOT NULL,
    cliente_id INTEGER NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- agregar y modificar columnas.
ALTER TABLE clientes
ADD COLUMN telefono VARCHAR(20);

ALTER TABLE clientes
ALTER COLUMN telefono TYPE VARCHAR(30);

--modificando (agregar) la no nulidad de un campo de la tabla clientes
ALTER TABLE clientes
ALTER COLUMN telefono SET NOT NULL;

--modificando (eliminando) la no nulidad de un campo de la tabla clientes
ALTER TABLE clientes
ALTER COLUMN telefono DROP NOT NULL;

--
TRUNCATE TABLE clientes;
--
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXISTS pedidos;

-- EJERCICIO 
CREATE TABLE clientes(
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
correo VARCHAR(40) NOT NULL
);

CREATE TABLE productos(
id SERIAL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
precio INTEGER NOT NULL,
stock INTEGER NOT NULL
);

CREATE TABLE ventas(
id SERIAL PRIMARY KEY,
fecha DATE NOT NULL,
cliente_id INTEGER NOT NULL,
FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE detalle_venta(
id SERIAL PRIMARY KEY,
venta_id INTEGER NOT NULL,
producto_id INTEGER NOT NULL,
cantidad INTEGER NOT NULL,
FOREIGN KEY (venta_id) REFERENCES ventas(id),
FOREIGN KEY (producto_id) REFERENCES productos(id)
);

--crear una tabla proveedores

--id
--nombre
--telefono
--correo

--condiciones
-- id pk
-- nombre es obligatorio
--correo opcional

--modificar productos para agregar la columna categoria varchar(50)
--hacer que categoria no permita nulos
--vaciar completamente detalle_ventas, sin eliminar la estructura


--DDL PARTE 2

--EJERCICIO 1
-- Si existen de antes, las eliminamos primero para evitar errores.
DROP TABLE IF EXISTS libros;
DROP TABLE IF EXISTS categorias_libros;

-- Creamos la tabla de categorías.
CREATE TABLE categorias_libros (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Creamos la tabla libros.
CREATE TABLE libros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    autor VARCHAR(100),
    categoria_id INTEGER,
    FOREIGN KEY (categoria_id) REFERENCES categorias_libros(id)
);

-- Agregamos nuevas columnas.
ALTER TABLE libros
ADD COLUMN fecha_publicacion DATE;

ALTER TABLE categorias_libros
ADD COLUMN descripcion VARCHAR(150);

-- Modificamos la nulidad del campo titulo.
ALTER TABLE libros
ALTER COLUMN titulo SET NOT NULL;

-- Creamos tabla temporal de prueba.
DROP TABLE IF EXISTS prueba_biblioteca;

CREATE TABLE prueba_biblioteca (
    id SERIAL PRIMARY KEY,
    detalle VARCHAR(100)
);

INSERT INTO prueba_biblioteca (detalle) VALUES ('Registro 1');
INSERT INTO prueba_biblioteca (detalle) VALUES ('Registro 2');

-- TRUNCATE elimina todos los registros de la tabla,
-- pero conserva la estructura.
TRUNCATE TABLE prueba_biblioteca;


--EJERCICIO 2
DROP TABLE IF EXISTS veterinarios;
DROP TABLE IF EXISTS especialidades;

CREATE TABLE especialidades (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

CREATE TABLE veterinarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    especialidad_id INTEGER,
    FOREIGN KEY (especialidad_id) REFERENCES especialidades(id)
);

ALTER TABLE veterinarios
ADD COLUMN fecha_ingreso DATE;

ALTER TABLE especialidades
ADD COLUMN piso INTEGER;

--eliminación clave primaria
ALTER TABLE veterinarios
DROP CONSTRAINT veterinarios_pkey;

ALTER TABLE veterinarios
ALTER COLUMN nombre SET NOT NULL;

ALTER TABLE veterinarios
ALTER COLUMN id TYPE NUMERIC(8,2);

--eliminacion de la clave foranea
ALTER TABLE veterinarios
DROP CONSTRAINT veterinarios_especialidad_id_fkey;

--ELIMINAR Y TRUNCAR

DROP TABLE IF EXISTS turnos_prueba;

CREATE TABLE turnos_prueba (
    id SERIAL PRIMARY KEY,
    observacion VARCHAR(100)
);

INSERT INTO turnos_prueba (observacion) VALUES ('Control general');
INSERT INTO turnos_prueba (observacion) VALUES ('Vacunación');

TRUNCATE TABLE turnos_prueba;

