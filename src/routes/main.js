var express = require('express');
const mainController= require('../controllers/mainController.js')
var router = express.Router();


router.get('/', mainController.index)




module.exports = router;
