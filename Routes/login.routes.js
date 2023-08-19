const loginControllers = require('../Controllers/login.controllers')
const express = require('express')
const router = express.Router()
const Sentry = require('@sentry/node')
const {
    body,
    validationResult
} = require('express-validator')
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
const validation = [
    body('login').notEmpty().escape(),
    body('password').notEmpty()
]
router.post('/', validation, async (req, res) => {
    try {
        const result = validationResult(req)
        if (result.isEmpty()) {
            const token = await loginControllers.login(req.body)
            res.send(token)
        } else {
            res.send({
                errors: result.array()
            })
        }
    } catch (e) {
        Sentry.captureException(e)
    }
})
module.exports = router