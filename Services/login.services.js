const helper = require('../helpers/helper')
const User = require('../models/Users')
class LoginServices {
    async getUser(login) {
        const user = await helper.findByParameter(User, 'login', login)
        return user
    }
}
module.exports = new LoginServices()