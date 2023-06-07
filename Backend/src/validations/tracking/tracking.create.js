import { body } from "express-validator";

export const trackingValidationCreate = [
    body('fecha')
    .notEmpty().withMessage('La fecha es requerida')
    .isISO8601().toDate().withMessage('La fecha debe tener su formato respectivo ejemplo: 2023-02-10'),


    body('alimentos')
    .notEmpty().withMessage('Los alimentos son requeridos')
    .isString().withMessage('Debe ser un string')
    .isLength({min:5}).withMessage('El campo deber contener al menos 5 caracteres'),

    body('actividad_fisica')
    .notEmpty().withMessage('La actividad fisica es requerida')
    .isString().withMessage('Debe ser un string'),

    body('frecuencia_cardiaca')
    .notEmpty().withMessage('La frecuencia cardiaca es requerida')
    .isInt().withMessage('Deber ser un numero entero')
    .isLength({min:2}).withMessage('El campo deber contener al menos 2 caracteres'),

    body('peso')
    .notEmpty().withMessage('El peso es requerido')
    .isFloat().withMessage('Deber ser un numero decimal')
    .isLength({min:2}).withMessage('Deber tener al 2 caracteres'),

    body('presion_arterial')
    .notEmpty().withMessage('La frecuencia arterial es requerida')
    .isInt().withMessage('Debe ser un numero entero')
    .isLength({min:2}).withMessage('Deber tener al 2 caracteres'),

    // body('id_usuario')
    // .notEmpty().withMessage('El campo es requerido')
    // .isInt().withMessage('Deber ser un numero entero')




]