const jwt = require('jsonwebtoken')
const Sentry = require('@sentry/node')
const authenticateToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        const token = authHeader?.split(' ')[1]
        if (!token) res.sendStatus(401)
        jwt.verify(token, process.env.SECRET_KEY, (err, id) => {
            if (err) throw new Error('token is invalid')
            req.idUser = id
            next()
        })
    } catch (e) {
        Sentry.captureException(e)
        res.sendStatus(403)
    }

}

module.exports = authenticateToken