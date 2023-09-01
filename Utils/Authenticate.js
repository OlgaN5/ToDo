const jwt = require('jsonwebtoken')
const Sentry = require('@sentry/node')
const authenticateToken = (req, res, next) => {
    try {
        console.log("111111")
        const authHeader = req.headers.authorization
        const token = authHeader?.split(' ')[1]
        if (!token) res.status(401).json({message:'нужен токен'})
        jwt.verify(token, process.env.SECRET_KEY, (err, id) => {
            if (err)  res.status(403).json({message:'token is invalid'})
            req.idUser = id
        console.log("111111")
            next()
        })
    } catch (e) {
        // console.log('catch')
        Sentry.captureException(e)
        // res.status(403)
    }
}

module.exports = authenticateToken