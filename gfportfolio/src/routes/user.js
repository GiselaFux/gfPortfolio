const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController.js')
//const path=require('path');




const validations = require("../middlewares/validateUserMiddleware");
router.get('/', userController.user)
//ruta para almacenar
router.post('/store', validations, userController.store)

module.exports=router;
