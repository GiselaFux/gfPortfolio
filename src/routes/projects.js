const express= require('express');
const projectsController= require('../controllers/projectsController.js')
const router= express.Router();


router.get('/', projectsController.list)


module.exports = router;