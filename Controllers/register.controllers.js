const bcrypt = require('bcrypt')
const registerServices = require('../Services/register.services')
const saltRounds = 2
class RegisterControllers {
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