const express = require('express')
const router = express.Router()
const taskRouter = require('./task.routes')
const registerRouter = require('./register.routes')
const loginRouter = require('./login.routes')
router.use('/task', taskRouter)
router.use('/register', registerRouter)
router.use('/login', loginRouter)

module.exports = router