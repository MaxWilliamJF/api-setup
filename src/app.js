require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const express = require('express')
const router = require('./routes/routes')
const app = express()

app.use(express.json())
app.use(router)

module.exports = app
