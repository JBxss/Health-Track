//verificacion del token
import { jwtVerify } from "jose";
import { JWT_KEY } from "../../config.js";

export const userJwt = async ( req,res, next ) =>{
    //cabezera del token
    const { authorization } = req.headers;

    if(!authorization ) return res.status(401).json({
        errorMessage:'Usuario no autorizado '
    })

    const jwt = authorization .split(' ')[1];

    if(!jwt) return res.status(401).json({errorMessage:'Usuario no autorizado'})

    try {
        const encoder = new TextEncoder();

        const {payload} = await jwtVerify (jwt, encoder.encode(JWT_KEY));
        //console.log(payload)
        //req.userId = payload.id;
        req.id_usuario = payload.id_usuario;
        next();
    } catch (error) {
        return res.status(401).send('Usuario no autorizado ')
    }
}

