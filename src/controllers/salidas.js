import { pool } from "../db.js";

export const all = (req, res) => {
    pool.query('SELECT * FROM sal;', (error, results) => {
        if(error) throw error;
        res.json(results);
    })
};

export const create = (req, res) => {
    const {fecha, cod_producto, cantidad} = req.body
    pool.query(`INSERT INTO salidas(fecha, cod_producto, cantidad)
                VALUES('${fecha}', '${cod_producto}', ${cantidad})
    `, (error, results) => {
        if(error) throw error
        res.send('Se creó con exito.')
    })
}

export const del = (req, res) => {
    const id_salida = req.params.id
    pool.query(`DELETE FROM salidas WHERE id_salida = ${id_salida}`
    , (error, results) => {
        if(error) throw error
        res.send('Se eliminó con exito.')
    })
};