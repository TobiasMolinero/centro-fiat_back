import { pool } from '../db.js'

export const all = (req, res) => {
    pool.query('SELECT * FROM productos WHERE estado = 1;', (error, results) => {
        if(error) throw error;
        res.json(results);
    })
};

export const one = (req, res) => {
    const cod_producto = req.params.id;
    pool.query(`SELECT * FROM productos WHERE cod_producto='${cod_producto}';
    `, (error, results) => {
        if(error) throw error;
        res.json(results);
    })
};

export const create = (req, res) => {
    const {cod_producto, marca, descripcion, precio_costo, precio_venta, stock} = req.body;
    pool.query(`INSERT INTO productos(cod_producto, marca, descripcion, precio_costo, precio_venta, stock)
                VALUES('${cod_producto}', '${marca}', '${descripcion}', ${precio_costo}, ${precio_venta}, ${stock});
    `, (error, results) => {
        if(error) throw error;
        res.send('Se registró el producto con exito.');
    })
};

export const edit = (req, res) => {
    const cod_producto = req.params.id;
    const {marca, descripcion, costo, precio_venta, stock} = req.body;
    pool.query(`UPDATE productos SET 
                marca = '${marca}',
                descripcion = '${descripcion}',
                costo = ${costo},
                precio_venta = ${precio_venta},
                stock = ${stock}
                WHERE cod_producto = '${cod_producto}';
    `, (error, results) => {
        if(error) throw error;
        res.send('El producto se modificó con exito.');
    })
};

export const del = (req, res) => {
    const cod_producto = req.params.id
    pool.query(`UPDATE productos SET estado = 0
                WHERE cod_producto = '${cod_producto}';
    `, (error, results) => {
        if(error) throw error;
        res.send('El producto se dio de baja con exito.')
    })
}

export const cargarSelect = (req, res) => {
    pool.query('SELECT cod_producto, descripcion FROM productos;', (error, results) => {
        if(error)throw error;
        res.json(results);
    })
}