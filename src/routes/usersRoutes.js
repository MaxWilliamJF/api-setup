const express = require('express');
const router = new express.Router;
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', userController.create);
router.get('/', userController.findAll);
router.get('/me', authMiddleware.verifyJWT, userController.findMe);

module.exports = router;