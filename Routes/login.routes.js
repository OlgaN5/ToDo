const loginControllers = require('../controllers/login.controllers')
const express = require('express')
const router = express.Router()

const {
    body
} = require('express-validator')

const validation = [
    body('login').notEmpty().escape(),
    body('password').notEmpty()
]

/**
 * @swagger
 * /api/login/:
 *   post:
 *     summary: ggfdsgfdgfdfg
 *     tags: 
 *       - Login
 *     requestBody:
 *        description: task
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                login: 
 *                  type: string
 *                  default: login
 *                password: 
 *                  type: string
 *                  default: fff444
 *     description: use to login and get token
 *     responses:
 *       '200': 
 *         description: A succesful request
 *       '401': 
 *         description: Unautorized
 */

router.post('/', validation, loginControllers.processLogin )
module.exports = router