import { body, check } from "express-validator";


export const userPasswordValidate = 

       [ check('contrasena')
        .notEmpty().withMessage('La contrasena es requerida')
        .isLength({min:10}).withMessage('La contrasena debe tener al menos 8 caracteres')



   ]
