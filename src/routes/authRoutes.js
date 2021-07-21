const express = require('express')
const router = new express.Router()
const authController = require('../controllers/authController')

router.post('/', authController.login)

module.exports = router
