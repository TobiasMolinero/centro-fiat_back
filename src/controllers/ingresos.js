import { pool } from '../db.js';

export const all = (req, res) => {
    pool.query('SELECT * FROM ing;', (error, results) => {
        if(error) throw error;
        res.json(results);
    })
};

export const create = (req, res) => {
    const {fecha, cod_producto, cantidad} = req.body

    pool.query(`UPDATE productos SET stock = stock + ${cantidad}
                WHERE cod_producto = '${cod_producto}'
    `, (error, results) => {
        if(error) throw error;
    })

    pool.query(`INSERT INTO ingresos(fecha, cod_producto, cantidad)
    VALUES('${fecha}', '${cod_producto}', ${cantidad});`
    , (error, results) => {
        if(error)throw error;
        res.send('Se creó con exito');    
    });
};

export const del = (req, res) => {
    const id_ingreso = req.params.id
    const {cod_producto, cantidad} = req.body

    pool.query(`UPDATE productos SET stock = stock - ${cantidad}
                WHERE cod_producto = '${cod_producto}'
    `, (error, results) => {
    if(error) throw error
})


    pool.query(`DELETE FROM ingresos WHERE id_ingreso = ${id_ingreso}`
    , (error, results) => {
        if(error) throw error
        res.send('Se eliminó con exito.')
    })
};