import { Router } from "express";

//import controller
import { trackingCreate,trackingById, trackingDelete,trackingUpdate,getTrackingData } 
from "../controller/tracking.controller.js";
 
//import validatons
import { trackingValidationCreate } from "../validations/tracking/tracking.create.js";

const router = Router()


//ENDPOINTS

//grafico
router.get('/tracking/data/:id_usuario', getTrackingData)

//byId
router.get('/tracking/tracking/:id_seguimiento',trackingById)

//create
router.post('/tracking/create',trackingValidationCreate, trackingCreate)

//delete
router.delete('/tracking/delete/:id_seguimiento', trackingDelete)

//update
router.patch('/tracking/update/:id_seguimiento',trackingUpdate)







export default router;