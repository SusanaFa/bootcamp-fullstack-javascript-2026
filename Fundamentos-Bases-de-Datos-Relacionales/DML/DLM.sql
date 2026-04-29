-- DML PARTE 1 
-- Ejercicio 1: insertar un nuevo cliente
INSERT INTO clientes (nombre, ciudad)
VALUES ('Valentina Morales', 'Puerto Montt');

SELECT * FROM clientes;

-- Ejercicio 2: insertar un nuevo pedido usando claves foráneas válidas
INSERT INTO pedidos (cliente_id, vendedor_id, fecha, total)
VALUES (6, 3, '2026-04-08', 66000);

SELECT * FROM pedidos;

-- Ejercicio 3: provocar un error de integridad referencial
INSERT INTO pedidos (cliente_id, vendedor_id, fecha, total)
VALUES (99, 2, '2026-04-09', 30000);


-- Ejercicio 4: actualizar la ciudad de un cliente
UPDATE clientes
SET ciudad = 'Reñaca'
WHERE id = 2;

SELECT * FROM clientes
WHERE id = 2;


-- Ejercicio 5: aumentar el total de un pedido
UPDATE pedidos
SET total = total + 5000
WHERE id = 1;

SELECT * FROM pedidos
WHERE id = 1;

-- Ejercicio 6: eliminar un pedido específico
DELETE FROM pedidos
WHERE id = 6;

SELECT * FROM pedidos;

-- Ejercicio 7: intentar eliminar un cliente con pedidos asociados
DELETE FROM clientes
WHERE id = 1;

-- Ejercicio 8: eliminar correctamente un cliente sin pedidos
INSERT INTO clientes (nombre, ciudad)
VALUES ('Cliente Temporal', 'Rancagua');

SELECT * FROM clientes;

-- Ahora eliminamos ese cliente recién creado:
DELETE FROM clientes
WHERE nombre = 'Cliente Temporal';

SELECT * FROM clientes;


-- Ejercicio 9: transacción con ROLLBACK
BEGIN;

INSERT INTO clientes (nombre, ciudad)
VALUES ('Cliente Prueba Rollback', 'Talca');

SELECT * FROM clientes
WHERE nombre = 'Cliente Prueba Rollback';

ROLLBACK;

SELECT * FROM clientes
WHERE nombre = 'Cliente Prueba Rollback';



-- Ejercicio 10: transacción con COMMIT
BEGIN;

INSERT INTO clientes (nombre, ciudad)
VALUES ('Cliente Prueba Commit', 'Osorno');

COMMIT;

SELECT * FROM clientes
WHERE nombre = 'Cliente Prueba Commit';



-- Ejercicio 1: insert con ROLLBACK
BEGIN;

INSERT INTO clientes (nombre, ciudad)
VALUES ('Prueba Rollback 1', 'Talca');

SELECT * 
FROM clientes
WHERE nombre = 'Prueba Rollback 1';

ROLLBACK;

SELECT * 
FROM clientes
WHERE nombre = 'Prueba Rollback 1';




-- Ejercicio 2: insert con COMMIT
BEGIN;

INSERT INTO clientes (nombre, ciudad)
VALUES ('Prueba Commit 1', 'Osorno');

COMMIT;

SELECT * 
FROM clientes
WHERE nombre = 'Prueba Commit 1';


-- Ejercicio 3: update con ROLLBACK
BEGIN;

UPDATE clientes
SET ciudad = 'Arica'
WHERE id = 3;

SELECT *
FROM clientes
WHERE id = 3;

ROLLBACK;

SELECT *
FROM clientes
WHERE id = 3;


--DML PARTE 2
--Limpieza previa, por si ya hemos creado las tablas con anterioridad
DROP TABLE IF EXISTS transferencias;
DROP TABLE IF EXISTS cuentas;

-- Creación de tablas
CREATE TABLE cuentas (
    id SERIAL PRIMARY KEY,
    titular VARCHAR(100) NOT NULL,
    numero_cuenta VARCHAR(20) UNIQUE NOT NULL,
    saldo NUMERIC(12,2) NOT NULL CHECK (saldo >= 0)
);

CREATE TABLE transferencias (
    id SERIAL PRIMARY KEY,
    cuenta_origen INT NOT NULL,
    cuenta_destino INT NOT NULL,
    monto NUMERIC(12,2) NOT NULL CHECK (monto > 0),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    descripcion VARCHAR(255),
    FOREIGN KEY (cuenta_origen) REFERENCES cuentas(id),
    FOREIGN KEY (cuenta_destino) REFERENCES cuentas(id)
);

-- Insertar datos tabla cuentas
INSERT INTO cuentas (titular, numero_cuenta, saldo)
VALUES
    ('Ana Torres', '000111222', 500000),
    ('Luis Rojas', '000111333', 300000),
    ('Camila Pérez', '000111444', 150000);

SELECT * FROM cuentas;

-- Transacción 1
BEGIN;
-- 1. Descontar de la cuenta origen
UPDATE cuentas
SET saldo = saldo - 100000
WHERE id = 1;

-- 2. Abonar a la cuenta destino
UPDATE cuentas
SET saldo = saldo + 100000
WHERE id = 2;

-- 3. Registrar la transferencia
INSERT INTO transferencias (cuenta_origen, cuenta_destino, monto, descripcion)
VALUES (1, 2, 100000, 'Transferencia de Ana a Luis');

-- 4. Confirmar
COMMIT;
--revisar 
SELECT * FROM cuentas;
SELECT * FROM transferencias;


-- Transacción 2

BEGIN;
-- 1. Descontar de la cuenta origen
UPDATE cuentas
SET saldo = saldo - 50000
WHERE id = 1;

-- 2. Abonar a la cuenta destino
UPDATE cuentas
SET saldo = saldo + 50000
WHERE id = 99;

-- 3. Registrar la transferencia
INSERT INTO transferencias (cuenta_origen, cuenta_destino, monto, descripcion)
VALUES (1, 99, 50000, 'Transferencia errónea');

-- 4. Volver atrás
ROLLBACK;

--revisar
SELECT * FROM cuentas;
SELECT * FROM transferencias;


-- Transacción 3
BEGIN;

-- 1. Descontar de la cuenta origen
UPDATE cuentas
SET saldo = saldo - 80000
WHERE id = 1;

-- 2. Revisar cómo quedó la cuenta origen
SELECT * FROM cuentas WHERE id = 1;

-- 3. Abonar a la cuenta destino
UPDATE cuentas
SET saldo = saldo + 80000
WHERE id = 2;

-- 4. Revisar cómo quedó la cuenta destino
SELECT * FROM cuentas WHERE id = 2;

-- 5. Registrar la transferencia
INSERT INTO transferencias (cuenta_origen, cuenta_destino, monto, descripcion)
VALUES (1, 2, 80000, 'Transferencia bancaria');

-- 6. Confirmar
COMMIT;

-- Transacción 4-  Caso con saldo insuficiente

BEGIN;

UPDATE cuentas
SET saldo = saldo - 200000
WHERE id = 3
  AND saldo >= 200000;

SELECT * FROM cuentas WHERE id = 3;

ROLLBACK;


-- Transacción 5- transferencia segura
BEGIN;

-- 1. Descontar solo si hay saldo suficiente
UPDATE cuentas
SET saldo = saldo - 120000
WHERE id = 1
  AND saldo >= 120000;

-- 2. Revisar cuenta origen
SELECT * FROM cuentas WHERE id = 1;

-- 3. Abonar a la cuenta destino
UPDATE cuentas
SET saldo = saldo + 120000
WHERE id = 2;

-- 4. Registrar transferencia
INSERT INTO transferencias (cuenta_origen, cuenta_destino, monto, descripcion)
VALUES (1, 2, 120000, 'Transferencia segura Ana -> Luis');

-- 5. Confirmar
COMMIT;
