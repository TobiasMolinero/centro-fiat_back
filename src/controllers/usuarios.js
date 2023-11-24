import { pool } from '../db.js'

export const login = (req, res) => {

    const {nombre_usuario, contraseña} = req.body

    pool.query(`SELECT id_usuario FROM usuarios
                      WHERE nombre_usuario = '${nombre_usuario}' AND contraseña = '${contraseña}'
    `,(error, results) => {
        if(error) throw error
        if(results.length === '' || results.length === 0){
            res.json(0)
        } else {
            res.json('Ingresaste correctamente.')
        }
    })
}