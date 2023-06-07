import { Router } from "express";

//import controller
import { profileCreate,profileUpdate, profileDelete,getProfile } from "../controller/profile.controller.js";

//import validation
import { profileValidationCreate } from "../validations/profile/profile-create.validation.js";
const router = Router()

//create
router.post('/profile/create',profileValidationCreate, profileCreate)

//update
router.patch('/profile/update/:id_perfil',profileUpdate)

//delete
router.delete('/profile/delete/:id_perfil', profileDelete)

//get
router.get('/profile/profile/:id_perfil',getProfile )

export default router;