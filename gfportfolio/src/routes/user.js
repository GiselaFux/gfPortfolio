const express=require('express');
const router=express.Router();
const path=require('path');
const userController = require('../controllers/userController.js')





const validations = require("../middlewares/validateUserMiddleware");
router.get('/', userController.user)
//ruta para almacenar
router.post('/',validations, userController.store);
router.get('/thanks', userController.thanks)





module.exports=router;
