import { body } from "express-validator";

export const userNewContraseñaValidate = 
    [
        body('contrasena')
        .notEmpty().withMessage('La contrasena es requerida')
        .isLength({min:10}).withMessage('La contrasena debe tener al menos 8 caracteres'),

        body('newContrasena')
             .notEmpty().withMessage('La contrasena es requerida')
             .isLength({min:10}).withMessage('La contrasena debe tener al menos 8 caracteres')
    ]

    
