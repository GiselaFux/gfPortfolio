const path = require('path');
const fs = require('fs');

const projectsController = {
           list:(req,res,next) => {
    res.render('projects')
}
}

module.exports= projectsController;