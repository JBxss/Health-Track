//interfaz para crear seguimiento

export interface seguimientoInterface{
    
    id_seguimiento: number,
    fecha: Date,
    alimentos: string,
    actividad_fisica: string,
    frecuencia_cardiaca: number,
    peso: number,
    presion_arterial: number,
    id_usuario: number

}