const loginServices = require('../Services/login.services')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
class LoginControllers {
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