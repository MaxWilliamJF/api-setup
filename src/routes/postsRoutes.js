const express = require('express')
const router = new express.Router()
const blogpostController = require('../controllers/blogpostController')
const authMiddleware = require('../middlewares/authMiddleware')

router.get('/', blogpostController.findAll)
router.get('/:slug', blogpostController.findBySlug)
router.post('/', authMiddleware.verifyJWT, blogpostController.create)
router.put('/:id', authMiddleware.verifyJWT, blogpostController.edit)
router.delete('/:id', authMiddleware.verifyJWT, blogpostController.delete)

module.exports = router
