import {pool} from '../db.js'
import {validationResult} from 'express-validator';


//getByID
export const trackingById =  async(req,res ) =>{
    
    try {
        const [data] = await pool.query('SELECT * FROM seguimiento_salud WHERE id_seguimiento =? ', 
        [req.params.id_seguimiento])

        if(data.length === 0) return res.status(404).send('Seguimineto no encontrado')

        res.json(data[0])

    } catch (error) {
        console.log(error)
        res.status(500).send('Error en el servidor')
    }
}



//post
export const trackingCreate = async( req,res ) =>{

    //validaciones
    const errors = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({
        Errors: errors.array()
    })

    

     const { fecha, 
             alimentos,
             actividad_fisica,
             frecuencia_cardiaca,
             peso,
             presion_arterial,
             id_usuario    
     } = req.body
    
     try {
         const [data] = await pool.query
         ('INSERT INTO seguimiento_salud (fecha, alimentos, actividad_fisica,frecuencia_cardiaca,peso,presion_arterial,id_usuario ) VALUES (?,?,?,?,?,?,?)',
         [fecha,alimentos,actividad_fisica,frecuencia_cardiaca,peso, presion_arterial, id_usuario ])


         await pool.query('UPDATE perfil_usuario JOIN usuarios ON perfil_usuario.id_usuario = usuarios.id_usuario SET perfil_usuario.id_usuario = usuarios.id_usuario')
        
        
         res.send({
             id_seguimiento: data.insertId, fecha,
             alimentos, actividad_fisica,
             frecuencia_cardiaca, peso,
             presion_arterial, id_usuario
            
         })

     } catch (error) {
         console.log(error)
         return res.status(400).send('La informacion proporcionada no es valida')
     }

}

//delete
export const trackingDelete = async(req,res) =>{

    try {
        const [result] = await pool.query('DELETE FROM seguimiento_salud WHERE id_seguimiento = ?',[req.params.id_seguimiento])

        if(result.affectedRows <= 0) return res.status(404).send(`Seguimiento del usuario no encontrado`)

        res.status(200).send(`Seguimiento  eliminado con exito`)

    } catch (error) {
        console.log(error)
        res.status(500).send('Error en el servidor')
    }
}

//update
export const trackingUpdate =  async(req,res) => {
    
    const {alimentos, actividad_fisica, frecuencia_cardiaca, peso, presion_arterial} = req.body;

    try {
        //update
        const [data] = await pool.query('UPDATE seguimiento_salud SET alimentos =IFNULL(?,alimentos), actividad_fisica=IFNULL(?,actividad_fisica), frecuencia_cardiaca=IFNULL(?,frecuencia_cardiaca),peso=IFNULL(?,peso), presion_arterial=IFNULL(?,presion_arterial) WHERE id_seguimiento = ?',
        [alimentos, actividad_fisica, frecuencia_cardiaca, peso, presion_arterial, req.params.id_seguimiento])

        if(data.affectedRows === 0) return res.status(404).send('Usuario no encontrado')
        
        res.status(200).send('Seguimiento actualizado con exito')
    } catch (error) {
        
    }
}

//mostrar grafica de seguimiento
export const getTrackingData = async (req, res) => {
    try {
      const [data] = await pool.query('SELECT alimentos,actividad_fisica, frecuencia_cardiaca,presion_arterial, peso FROM seguimiento_salud WHERE id_usuario = ?', [req.params.id_usuario]);
  
      res.json(data[0]);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error en el servidor');
    }
  };
  

