import { Router } from "express";

//import controllers
import { userRegister,userLogin,userProfile,userUpdateData,
         userUpdateEmail,userUpdateContraseña,userDelete } from "../controller/user.controller.js";

//import validation
import { userRegisterValidate } from "../validations/user/user-register.validate.js";
import { userLoginValidate } from "../validations/user/user-login.validate.js";
import { userJwt } from "../validations/user/user.jwt.js";
import { userPasswordValidate } from "../validations/user/user-contraseña.validate.js";
import { userNewContraseñaValidate } from "../validations/user/user-newContreseña.validate.js";
import { userUpdateDataValidate } from "../validations/user/user-updateData.validate.js";
import { userUpdateGmailValidate } from "../validations/user/user-updateGmail.validate.js";



const router = Router();

//EndPoints====

//post: register
router.post('/register-usuario', userRegisterValidate,userRegister)

//post:login
router.post('/login-usuario',userLoginValidate,userLogin)

//getProfile
router.get('/perfil', userJwt,userProfile)

//delete
router.delete('/delete',userJwt,userPasswordValidate,userDelete) //check

//patch: nombre y apellido
router.patch('/update-data',userJwt,userUpdateDataValidate,userUpdateData) //  check

//patch: gmail
router.patch('/update-gmail', userJwt,userUpdateGmailValidate,userUpdateEmail) //check

//patch:contraseña
router.patch('/update-contrasena', userJwt,userNewContraseñaValidate, userUpdateContraseña )//ver


export default router;