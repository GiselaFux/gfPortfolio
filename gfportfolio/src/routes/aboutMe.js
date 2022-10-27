const express = require('express');
const aboutMeController= require('../controllers/aboutMeController.js')
const router = express.Router();

router.get('/', aboutMeController.aboutMe)

module.exports= router;

