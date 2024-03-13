const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userControllers')
const bodyParser = require('body-parser');



router.post('/changePassword',bodyParser.json(), UserController.confirmPassword)
router.post('/sendMail',bodyParser.json(), UserController.forgotPass)
router.post('/post',bodyParser.json(), UserController.postEmail)
router.get('/get',bodyParser.json(), UserController.getEmail)
router.use('/', UserController.index)

module.exports = router