import { body } from "express-validator";

export const profileValidationCreate = [
    body('preferencias')
    .notEmpty().withMessage('Este campo es requerido')
    .isString().withMessage('Debe ser un string')
    .isLength({min:10}).withMessage('Este campo puede tener al menos 10 caracteres'),


    body('metas_de_salud')
    .notEmpty().withMessage('Este campo es requerido')
    .isString().withMessage('Debe ser un string')
    .isLength({min:10}).withMessage('Este campo puede tener al menos 10 caracteres'),

    body('id_usuario')
    .notEmpty().withMessage('El campo es requerido')
    .isInt().withMessage('Deber ser un numero entero')

]