const loginServices = require('../services/login.services')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Sentry = require('@sentry/node')
const {
    validationResult
} = require('express-validator')


class LoginControllers {
    login = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                let token = null
                const {
                    login,
                    password
                } = req.body
                const user = await loginServices.getUser(login)

                if (user.length !== 0) {
                    const compareUser = await bcrypt.compare(password, user[0].password)
                    const {
                        _id
                    } = user[0]
                    if (compareUser) {
                        token = jwt.sign({
                            _id
                        }, process.env.SECRET_KEY)
                        // return token
                    }
                }
                // return null
                // const token = await this.login(req.body)
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
}
module.exports = new LoginControllers()