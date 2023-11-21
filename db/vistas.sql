CREATE VIEW ing AS
SELECT i.id_ingreso, i.fecha, i.cod_producto, p.descripcion, i.cantidad FROM ingresos i
INNER JOIN productos p
ON i.cod_producto = p.cod_producto;

SELECT * FROM ing;

CREATE VIEW sal AS 
SELECT s.id_salida, s.fecha, s.cod_producto, p.descripcion, s.cantidad FROM salidas s
INNER JOIN productos p
ON s.cod_producto = p.cod_producto;

SELECT * FROM sal;