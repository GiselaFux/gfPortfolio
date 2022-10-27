const express= require('express');
const knowledgeController=require('../controllers/knowledgeController.js')
const router= express.Router();

router.get('/', knowledgeController.list)

module.exports= router;