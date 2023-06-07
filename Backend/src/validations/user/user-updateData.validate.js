import { body, check } from "express-validator";


export const userUpdateDataValidate = 

   [
    body('nombre')
    .isString().withMessage('El campo debe ser un string')
    .notEmpty().withMessage('El nombre es requerido') 
    .isLength({max:40}).withMessage('El nombre debe tener como maximo 40 caracteres'),

     body('apellido')
     .isString().withMessage('El campo debe ser un string')
     .notEmpty().withMessage('El apellido es requerido')
     .isLength({max:40}).withMessage('El apellido debe tener como maximo 40 caracteres') 

    
]


  
    


