import {pool} from '../db.js'
import {validationResult} from 'express-validator';
//import {SALT} from '../constants/salt.js'
import {hash} from 'bcrypt';
import { compare } from "bcrypt";
import bcrypt from 'bcrypt';
import {SignJWT,jwtVerify} from 'jose'
import { JWT_KEY } from '../config.js';


//get:ver datos del usuario menos la contrasena
export const userProfile = async( req,res ) =>{
  
    const {id_usuario} = req;
    console.log(id_usuario)
    //const id_usuario = req.id_usuario;
    try {

        const [userData] = await pool.query('SELECT nombre, apellido, correo FROM usuarios WHERE id_usuario = ? ',[ id_usuario])
        //console.log(userData)
        if(userData.length === 0) return res.status(404).json({errorMessage:'Usuario no encontrado'})

        //devolvemos la data
        const {id_usuario: id, nombre, apellido, correo} = userData[0];
        //console.log(userData[0])
        //console.log(userId)

        return res.send({ id_usuario: id, nombre, apellido, correo })

        //retornar nuevo
        // res.json(userData[0])
        // console.log(userData[0])
    } catch (error) {
        console.log(error);
    return res.status(500).json({errorMessage:'Error en el servidor'})
    }
    
}


//post: REGISTER
export const userRegister = async ( req,res )=>{
    //validaciones
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({
        Errors: errors.array()
    })

    const { nombre, apellido, correo, contrasena} = req.body;

    const saltRonds = 12;

    const hashcontrasena = await bcrypt.hash(contrasena, saltRonds)

    try {
        const [data] = await pool.query('INSERT INTO usuarios (nombre,apellido,correo,contrasena) VALUES (?,?,?,?)',
        [nombre, apellido, correo, hashcontrasena])

        res.send({
            id_usuario: data.insertId,
            nombre,
            apellido,
            correo, 
            contrasena: hashcontrasena //encriptar pasword
        })
    } catch (error) {
        return res.status(400).send('La informacion proporcionada no es valida')
    }
}

//LOGIN
export const userLogin = async ( req,res ) =>{
    //validaciones
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({
        Errors: errors.array()
    })

    const { correo, contrasena } = req.body;
    //console.log({correo,contrasena})
    //si el usuario exsite en la DB
    try {
        const [data] = await pool.query('SELECT id_usuario, contrasena FROM usuarios WHERE correo = ? ', [correo])
       
        //si el usuario no se encuentra
        if(data.length === 0) return res.status(404).send('Usuario no encontrado')

        const storedcontrasena = data[0].contrasena;

         //comparmos contraseñas
        const checkPassword = await bcrypt.compare(contrasena, storedcontrasena)

        //sino coinciden
         if(!checkPassword)   return res.status(401).send('Credenciales invalidas')
         

        //generamos el jwt 
        const jwtConstructor = new SignJWT({
            //id_usuario:user.id_usuario
            id_usuario: data[0].id_usuario
        })

        const encoder = new TextEncoder();
        const jwt = await jwtConstructor.setProtectedHeader({alg:'HS256' , typ:'JWT',
                                        }).setIssuedAt().setExpirationTime('1h').sign(encoder.encode(JWT_KEY))

        return res.status(200).json({jwt})
    
    } catch (error) {
        console.log(error)
        res.status(500).send('Error en el servidor')
    }
}

//patch: actualiza nombre y apellido
    export const userUpdateData = async ( req,res ) => {
        //validaciones
         const errors = validationResult(req);
         if(!errors.isEmpty()) return res.status(422).json({
             Errors: errors.array()
         })

        const { id_usuario } = req;

        const {nombre, apellido} = req.body;

        const [userById] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario])
        
        if(userById.length <= 0) return res.status(404).json({errorMessage:'Usuario no encontrado'})

        //actualizamos los datos
        await pool.query('UPDATE usuarios SET nombre = ?, apellido = ? WHERE id_usuario = ?', [nombre, apellido, id_usuario])

        return res.send({message: ['Usuario actualizado con exito']});

    }

//patch:actualiza email
export const userUpdateEmail = async( req,res ) =>{

     //validaciones
       const errors = validationResult(req);
       if(!errors.isEmpty()) return res.status(422).json({
           Errors: errors.array()
       })

    const { id_usuario } = req;

    const { correo, contrasena } = req.body;

    const [userById] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario])
    
    if(userById.length <= 0)  return res.status(404).json({ error: 'Usuario no encontrado' });

    //comparamos contrasena
    const storedcontrasena = userById[0].contrasena

    const checkcontrasena = await bcrypt.compare(contrasena,storedcontrasena )

    if(!checkcontrasena)    return res.status(401).json({ error: 'Credenciales inválidas' });

    //actualizamos el gmail
    await pool.query('UPDATE usuarios SET correo = ?  WHERE id_usuario = ?', [correo, id_usuario])
    
    return res.json({ message: 'Correo actualizado con éxito' });
}

//patch:contrasena
  export const userUpdateContraseña = async ( req,res ) =>{
      //validaciones
      const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({
        Errors: errors.array()
    })

      const {id_usuario} = req;

      const {contrasena, newContrasena} = req.body;

      const [userById] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario])

      if(userById.length <= 0) return res.status(404).json({ error: 'Usuario no encontrado' });

      //comparamos la contraseña

     const storedcontrasena = userById[0].contrasena

     const checkcontrasena = await bcrypt.compare(contrasena, storedcontrasena)

    if(!checkcontrasena) return res.status(401).json({ error: 'Credenciales inválidas' });
    
    //actualizamos la contraseña

     const SALT = 12;
     const hashContrasena = await bcrypt.hash(newContrasena, SALT)

     await pool.query('UPDATE usuarios SET contrasena = ? WHERE id_usuario = ?', [hashContrasena, id_usuario])

     return res.json({ message: 'Contraseña actualizado con éxito' });

  }



//delete: se necesita una contrasena
export const userDelete = async ( req,res) =>{
     //validaciones
      const errors = validationResult(req);
     if(!errors.isEmpty()) return res.status(422).json({
        Errors: errors.array()
     })

        const {id_usuario } = req;

        const {contrasena} = req.body;

        //buscamos por id
        
        const [userById] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario])
        
        if(userById.length === 0) return res.status(401).json({ error: 'Credenciales inválidas' });

        const storedcontrasena = userById[0].contrasena

        const checkcontrasena = await bcrypt.compare(contrasena, storedcontrasena)

        if(!checkcontrasena) return res.status(401).json({ error: 'Usuario no autorizado' });

        //borramos el usuario
        await  pool.query('DELETE FROM usuarios WHERE id_usuario = ?', [id_usuario])

        return res.json({ message: 'Cuenta eliminada con éxito' });
}

