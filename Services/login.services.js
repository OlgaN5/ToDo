const helper = require('../Helpers/helper')
const User = require('../Models/Users')
class LoginServices {
    async getUser(login) {
        const user = await helper.findByParameter(User, 'login', login)
        return user
    }
}
module.exports = new LoginServices()