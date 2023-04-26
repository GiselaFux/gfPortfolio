const path= require('path');
const fs=require('fs');

const knowledgeController={
    list:(req,res,next)=>{
        res.render('knowledge')
    }
}

module.exports= knowledgeController;