const {body}=require('express-validator');
const path= require('path')

module.exports= [
    body('nameLastname')
    .notEmpty().withMessage('Debes ingresar tu nombre y apellido, por favor')
    .isLength({ min: 3, max: 40 })
    .withMessage("El nombre tiene que tener entre 3 y 40 caracteres"),
    body('email')
    .notEmpty().withMessage("Debes escribir un correo electrónico").bail()
    .isEmail().withMessage("Tiene que tener formato de email"),
   body('mesaje')
   .notEmpty().withMessage("Por favor, ingresa un comentario.Muchas gracias!"),
      
]
