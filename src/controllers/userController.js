/* const path = require('path');

const fs = require('fs');


const { validationResult } = require('express-validator');
/* requiero el modulo User de a carpeta models */


/*let db = require('../database/models');
let User = require('../database/models/User.js');


const userController = {
   user: (req, res) => {
 res.render('user')
},
store:async (req, res) => {
   const resultValidation = validationResult(req);

         console.log(resultValidation)
        if(resultValidation.errors.length >0){
        return res.render('user', {
        errors: resultValidation.mapped(),
        old: req.body
               })
              } 
         await db.Users.create({
            nameLastname:req.body.nameLastname,
            email:req.body.email,
            mesaje:req.body.mesaje,
         }) 
          return res.redirect('/user/thanks')
        },
        
        thanks:(req,res) => {
          res.render('thanks')
        }
}
module.exports= userController; */
const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');
/* requiero el modulo User de a carpeta models */

const db = require('../database/models');
const Users = require('../database/models/User.js');


const userController = {
   user: (req, res) => {
 res.render('user')
},
store:async (req, res) => {
  const resultValidation = validationResult(req);

         console.log(resultValidation)
        if(resultValidation.errors.length >0){
        return res.render('user', {
        errors: resultValidation.mapped(),
        old: req.body
               })
              }else{
         await db.Users.create({
            nameLastname:req.body.nameLastname,
            email:req.body.email,
            mesaje:req.body.mesaje,
         }) 
         res.redirect('/user/thanks')
    }
       
        },
        
        thanks:(req,res)=>{
          res.render('thanks')
        }
        

}

   



module.exports= userController;
