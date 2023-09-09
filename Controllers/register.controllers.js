const bcrypt = require('bcrypt')
const Sentry = require('@sentry/node')
const registerServices = require('../services/register.services')
const saltRounds = 2
const {
    validationResult
} = require('express-validator')
class RegisterControllers {
    async processRegister(req, res) {
        try {
            const result = validationResult(req)
            console.log(result)
            if (result.isEmpty()) {
                const user = await this.register(req.body)
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
    }
    async register(user) {
        const {
            email,
            login,
            password
        } = user

        const isEmail = await registerServices.checkUserParameters('email', email)
        const isLogin = await registerServices.checkUserParameters('login', login)

        if (isEmail) {
            return 'email is exist'
        }
        if (isLogin) {
            return 'login is exist'
        }

        const hashedPassword = await bcrypt.hashSync(password, saltRounds)
        const createdUser = await registerServices.createUser({
            email,
            login,
            password: hashedPassword
        })
        return createdUser
    }
}
module.exports = new RegisterControllers()