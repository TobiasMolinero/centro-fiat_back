DROP DATABASE centro_fiat;

CREATE DATABASE centro_fiat;
USE centro_fiat;

CREATE TABLE productos(
	cod_producto VARCHAR(50) PRIMARY KEY NOT NULL,
    marca VARCHAR(100) NOT NULL,
    descripcion VARCHAR(200) NOT NULL,
    costo DECIMAL(10,2) DEFAULT 0 NOT NULL,
	precio_venta DECIMAL(10, 2) DEFAULT 0 NOT NULL,
    stock INT default 0 NOT NULL,
    estado TINYINT DEFAULT 1 NOT NULL
);

CREATE TABLE ingresos(
	id_ingreso INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE,
    cod_producto VARCHAR(50),
    cantidad INT
);

CREATE TABLE salidas(
	id_salida INT PRIMARY KEY AUTO_INCREMENT,
	fecha DATE,
    cod_producto VARCHAR(50),
    cantidad INT
);

CREATE TABLE usuarios(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre_usuario VARCHAR(200),
    contraseña VARCHAR(100)
);

ALTER TABLE ingresos
ADD CONSTRAINT fk_ingresos_productos
FOREIGN KEY (cod_producto) REFERENCES productos(cod_producto);

ALTER TABLE salidas
ADD CONSTRAINT fk_salidas_productos
FOREIGN KEY (cod_producto) REFERENCES productos(cod_producto);

SET SQL_SAFE_UPDATES = 0;




