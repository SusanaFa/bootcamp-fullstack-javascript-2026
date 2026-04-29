DROP TABLE IF EXISTS pedidos;
DROP TABLE IF EXISTS vendedores;
DROP TABLE IF EXISTS clientes;

CREATE TABLE clientes(
id SERIAL PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
ciudad VARCHAR(100) NOT NULL
);

CREATE TABLE vendedores(
id SERIAL PRIMARY KEY,
nombre VARCHAR(50) NOT NULL,
zona VARCHAR(50) NOT NULL
);

CREATE TABLE pedidos(
id SERIAL PRIMARY KEY,
cliente_id INT,
vendedor_id INT,
fecha DATE NOT NULL,
total NUMERIC (10,2) NOT NULL,
FOREIGN KEY (cliente_id) REFERENCES clientes(id),
FOREIGN KEY (vendedor_id) REFERENCES vendedores(id)
 );

INSERT INTO clientes (nombre, ciudad)
VALUES
  ('Ana Torres', 'Santiago'),
  ('Luis Rojas', 'Valparaíso'),
  ('Camila Pérez', 'Concepción'),
  ('Diego Soto', 'Santiago'),
  ('Fernanda Muñoz', 'La Serena'),
  ('Matías Herrera', 'Temuco');


INSERT INTO vendedores (nombre, zona)
VALUES
  ('Paula Díaz', 'Norte'),
  ('Jorge Castro', 'Centro'),
  ('María López', 'Sur'),
  ('Pedro Silva', 'Centro');



  INSERT INTO pedidos (cliente_id, vendedor_id, fecha, total)
VALUES
  (1, 2, '2026-04-01', 25000),
  (2, 2, '2026-04-02', 48000),
  (1, 1, '2026-04-03', 15000),
  (3, 3, '2026-04-04', 72000),
  (4, 2, '2026-04-05', 31000),
  (2, 4, '2026-04-06', 12000),
  (5, 1, '2026-04-07', 54000);

  select * from clientes;
  select * from vendedores;
  select * from pedidos;

INSERT INTO vendedores(nombre, zona)
VALUES ('Catalina Reyes', 'Sur');