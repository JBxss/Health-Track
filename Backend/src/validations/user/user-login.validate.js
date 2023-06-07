import {body} from 'express-validator'


export const userLoginValidate = [

    body('correo')
    .isEmail().withMessage('El correo no es valido')
    .notEmpty().withMessage('El correo es requerido'),

    body('contrasena')
    .notEmpty().withMessage('La contrasena es requerida')
    .isLength({min:10}).withMessage('La contrasena debe tener al menos 8 caracteres')

]