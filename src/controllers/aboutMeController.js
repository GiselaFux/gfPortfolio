const path=require('path');
const fs=require('fs');

const aboutMeController = {
    aboutMe:(req,res,next)=>{
        res.render('aboutMe')
      
    },
}
module.exports = aboutMeController;