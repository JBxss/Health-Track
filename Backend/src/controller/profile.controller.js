import {pool} from '../db.js'
import { validationResult } from 'express-validator'


export const profileCreate = async( req,res ) =>{
    //validaciones
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({
        Errors: errors.array()
    })

    const {preferencias, metas_de_salud, id_usuario} = req.body;

    try {
        const [data] = await pool.query('INSERT INTO perfil_usuario (preferencias,metas_de_salud, id_usuario) VALUES (?,?,?)',
        [preferencias, metas_de_salud,id_usuario])

        if(data.length <=0) return res.status(400).json({errorMessage:'Peticion invalida'})

        res.send({
            id_perfil: data.insertId,
            preferencias,
            metas_de_salud,
            id_usuario
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({errorMessage:'Error en el servidor'})
    }
}

//update
export const profileUpdate  = async( req,res ) =>{

    const {preferencias, metas_de_salud} = req.body

    try {
        const [data]    = await pool.query('UPDATE perfil_usuario SET preferencias=IFNULL(?,preferencias),metas_de_salud=IFNULL(?,metas_de_salud) WHERE id_perfil =? ', 
        [preferencias,metas_de_salud, req.params.id_perfil])

        if(data.affectedRows === 0) return res.status(404).send('Usuario no encontrado')

        res.status(200).send('Perfil actualizado con exito')

    } catch (error) {
        console.log(error)
        res.status(500).send('Error en el servidor')
    }
}

//delete
export const profileDelete = async( req,res ) =>{

    const {id_perfil} = req.params;

    try {
        const [data] = await pool.query('DELETE FROM perfil_usuario WHERE id_perfil =?', [id_perfil])

        if(data.affectedRows === 0) return res.status(404).send('Perfil del usuario no encontrado')

        res.status(200).send('Perfil eliminado con exito')

    } catch (error) {
        
    }

}

export const getProfile = async(req,res) =>{
    try {
        const [data] = await pool.query('SELECT * FROM perfil_usuario WHERE id_perfil = ?',[req.params.id_perfil] )

        if(data.affectedRows === 0) return res.status(404).json({errorMessage:'Perfil no encontrado'})

        res.json(data[0])

    } catch (error) {
        console.log(error)
        res.status(500).json({errorMessage:'Error en el servidor'})
    }
}