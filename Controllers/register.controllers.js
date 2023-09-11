const bcrypt = require('bcrypt')
const Sentry = require('@sentry/node')
const registerServices = require('../services/register.services')
const saltRounds = 2
const {
    validationResult
} = require('express-validator')
class RegisterControllers {
    async register(req, res) {
        try {
            const result = validationResult(req)
            console.log(result)
            if (result.isEmpty()) {

                const {
                    email,
                    login,
                    password
                } = req.body

                const isEmail = await registerServices.findByParameters('email', email)
                const isLogin = await registerServices.findByParameters('login', login)

                if (isEmail.length !== 0) {
                    return res.send({
                        message: 'email is exist'
                    })
                }
                if (isLogin.length !== 0) {
                    return res.send({
                        message: 'login is exist'
                    })
                }

                const hashedPassword = await bcrypt.hashSync(password, saltRounds)
                const createdUser = await registerServices.createUser({
                    email,
                    login,
                    password: hashedPassword
                })
                return res.send(createdUser)
            } else {
                console.log('TYUIOIUYGFDFGHJKJHGF')
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
   
}
module.exports = new RegisterControllers()