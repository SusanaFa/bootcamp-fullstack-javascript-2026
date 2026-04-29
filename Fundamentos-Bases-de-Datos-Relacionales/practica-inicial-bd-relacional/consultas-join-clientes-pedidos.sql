-- Consulta 1: INNER JOIN básico entre pedidos y clientes
SELECT p.id, c.nombre AS clientes, c.ciudad AS residencia, p.fecha, p.total
FROM pedidos p
INNER JOIN clientes c
ON p.cliente_id = c.id;

-- Consulta 2: INNER JOIN entre tres tablas
SELECT 
p.id,
c.nombre AS cliente,
v.nombre AS vendedor,
p.fecha,
p.total
FROM pedidos p
INNER JOIN clientes c
ON p.cliente_id = c.id
INNER JOIN vendedores v
ON p.vendedor_id = v.id;


-- Consulta 3: LEFT JOIN entre clientes y pedidos
SELECT 
c.id,
c.nombre AS cliente,
p.id AS pedido_id,
p.total
FROM clientes c
LEFT JOIN pedidos p
ON c.id = p.cliente_id
ORDER BY c.id;

--Consulta 4: RIGHT JOIN entre vendedores y oedidos
SELECT
v.id,
v.nombre AS vendedor,
p.id AS pedido_id,
p.total
FROM pedidos p
RIGHT JOIN vendedores v
ON p.vendedor_id = v.id
ORDER BY v.id;

--Consulta 5:  INNER JOIN con filtro
SELECT
p.id,
c.nombre AS cliente,
c.ciudad,
p.total
FROM pedidos p
INNER JOIN clientes c
ON p.cliente_id = c.id
WHERE c.ciudad = 'Valparaíso';

