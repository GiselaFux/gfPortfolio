const path = require('path');
const fs = require("fs");

mainController={
    index:(req,res,next)=>{
      res.render('index');
     
    }
  

}
module.exports= mainController;