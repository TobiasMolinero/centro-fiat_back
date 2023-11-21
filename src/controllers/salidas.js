import { pool } from "../db.js";

export const all = (req, res) => {
    pool.query('SELECT * FROM sal;', (error, results) => {
        if(error) throw error;
        res.json(results);
    })
};

export const create = (req, res) => {
    const {fecha, cod_producto, cantidad} = req.body
    var stock = 0

    pool.query(`SELECT cod_producto, stock FROM productos
                WHERE cod_producto = '${cod_producto}'
    `, (error, results) => {
        if(error)throw error
        stock = results[0].stock
        if(stock - cantidad < 0){
            res.json({
                id: 0,
                mensaje: `No hay suficiente cantidad de este producto. Stock: ${stock}`
            })
        } else {
            pool.query(`UPDATE productos SET stock=${stock-cantidad}
                        WHERE cod_producto = '${cod_producto}'
            `, (error, results) => {
                if(error) throw error
            })
                
            pool.query(`INSERT INTO salidas(fecha, cod_producto, cantidad)
            VALUES('${fecha}', '${cod_producto}', ${cantidad})
            `, (error, results) => {
                if(error) throw error
                res.send('Se creo con exito.')
            })
        }
    })
}

export const del = (req, res) => {
    const id_salida = req.params.id
    const {cod_producto, cantidad} = req.body

    pool.query(`UPDATE productos SET stock = stock + ${cantidad}
                WHERE cod_producto = '${cod_producto}'
    `, (error, results) => {
        if(error) throw error
    })

    pool.query(`DELETE FROM salidas WHERE id_salida = ${id_salida}`
    , (error, results) => {
        if(error) throw error
        res.send('Se eliminó con exito.')
    })
};