INSERT INTO productos(cod_producto, marca, descripcion, costo, precio_venta)
VALUES('rot001', 'Korazzo', 'Rotula', 7530, 11300),
('ext594', 'Korazzo', 'Extremo', 8000, 12000),
('pre234', 'Korazzo', 'Precap', 5100, 7700),
('cor5pk', 'Dayco', 'Correa 5pk1170', 7650, 11500),
('cor123', 'Dayco', 'Correa Distribucion', 15850, 23800),
('lamp7', 'Kobo', 'Lampara H7', 2200, 3300),
('lamp4', 'Kobo', 'Lampara H4', 2000, 3000),
('lamp1', 'Kobo', 'Lampara H1', 1400, 2100),
('ten384', 'Dayco', 'Tensor Distribución', 13900, 20850),
('rul852', 'Expoyer', 'Ruleman Tensor p/Correa Poli V', 5100, 7700),
('esco24', 'Ektion', 'Escobilla 24"', 7700, 11550),
('esco16', 'Ektion', 'Escobilla 16"', 6700, 10050),
('rul23', 'NBC', 'Ruleman Rueda', 10200, 15300),
('fil65', 'Mahle', 'Filtro Aceite', 3750, 5650),
('fil32', 'Mahle', 'Filtro Aire', 3300, 4950),
('par965', 'Expoyer', 'Paragolpe Delantero', 44700, 67200),
('opt123', 'Fitam', 'Optica', 8100, 12150),
('far032', 'Fitam', 'Faro Trasero', 43300, 64950);

SELECT * FROM productos;
SELECT cod_producto, descripcion FROM productos;

UPDATE productos SET stock = stock + 3 ; 
SELECT cod_producto, stock FROM productos;

INSERT INTO usuarios(nombre_usuario, contraseña)
VALUES('tobias', '12345');
SELECT  * FROM usuarios;



