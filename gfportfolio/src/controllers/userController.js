const path=require('path');
const fs= require('fs');
const { validationResult } = require('express-validator');
/* requiero el modulo User de a carpeta models */
//const db = require('../database/models');
//const User = require('../database/models/User');


const userController = {
   user: (req, res) => {
 res.render('user')
},
store: (req, res) => {
  const resultValidation = validationResult(req);
         console.log(resultValidation)
        if(resultValidation.errors.length >0){
        return res.render('user', {
        errors: resultValidation.mapped(),
        old: req.body
               })
           }
         db.User.create({
            nameLastname:req.body.nameLastname,
            email:req.body.email,
            mesaje:req.body.mesaje,
    })
        return res.redirect('/')
        }

}

   



module.exports= userController;