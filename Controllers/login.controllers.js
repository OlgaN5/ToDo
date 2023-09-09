const loginServices = require('../services/login.services')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Sentry = require('@sentry/node')
const {
    validationResult
} = require('express-validator')


class LoginControllers {
     processLogin = async (req, res)=> {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const token = await this.login(req.body)
                if (token) {
                    console.log(token)
                    res.send({
                        token
                    })
                } else {
                    res.send('token not received')
                }
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async login(data) {
        const {
            login,
            password
        } = data
        const user = await loginServices.getUser(login)
        if (user) {
            const compareUser = await bcrypt.compare(password, user.password)
            const {
                _id
            } = user
            if (compareUser) {
                const token = jwt.sign({
                    _id
                }, process.env.SECRET_KEY)
                return token
            }
        }
        return null
    }
}
module.exports = new LoginControllers()