const router = require('express').Router()

router.get('/', (req, res) => {
  res.send({ ok: true })
})

router.use('/auth', require('./authRoutes'))
router.use('/posts', require('./postsRoutes'))
router.use('/users', require('./usersRoutes'))

// Handle 404 errors
router.use((req, res, next) => {
  res.status(404).send({ message: 'Unable to find requested resource' })
})

// Future error handler :)
router.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: err.message
  })
})

module.exports = router
