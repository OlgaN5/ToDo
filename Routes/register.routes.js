const Sentry = require('@sentry/node')
const express = require('express')
const router = express.Router()
const registerControllers = require('../Controllers/register.controllers')
const {
    body,
    validationResult
} = require('express-validator')
/**
 * @swagger
 * /api/register/:
 *   post:
 *     tags: 
 *       - Register
 *     requestBody:
 *        description: task
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email: 
 *                  type: string
 *                  default: email@gmail.com
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
const validation = [
    body('email').notEmpty().escape().isEmail(),
    body('login').notEmpty().escape().isLength({
        min: 5
    }),
    body('password').notEmpty().isLength({
        min: 6,
        max: 15
    })
]
router.post('/', validation, async (req, res) => {
    try {
        const result = validationResult(req)
        console.log(result)
        if (result.isEmpty()) {
            const user = await registerControllers.register(req.body)
            console.log(user)
            res.send(user)
        } else {
            console.log('TYUIOIUYGFDFGHJKJHGF')
            res.send({
                errors: result.array()
            })
        }
    } catch (e) {
        Sentry.captureException(e)
    }
})

module.exports = router