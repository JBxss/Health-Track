import { body } from 'express-validator';

export const userRegisterValidate = [
    body('nombre')
    .isString().withMessage('El campo debe ser un string')
    .notEmpty().withMessage('El nombre es requerido') 
    .isLength({max:40}).withMessage('El nombre debe tener como maximo 40 caracteres'),

    body('apellido')
    .isString().withMessage('El campo debe ser un string')
    .notEmpty().withMessage('El apellido es requerido') 
    .isLength({max:40}).withMessage('El apellido debe tener como maximo 40 caracteres')  ,


    body('correo')
    .isEmail().withMessage('El correo no es valido')
    .notEmpty().withMessage('El correo es requerido'),

    body('contrasena')
    .notEmpty().withMessage('La contrasena es requerida')
    .isLength({min:10}).withMessage('La contrasena debe tener al menos 8 caracteres')

]