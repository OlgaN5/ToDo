const helper = require('../Helpers/helper')
class LoginServices {
    async getUser(login) {
        const user = await helper.findByParameter('./users.json', 'login', login)
        return user
    }
}
module.exports = new LoginServices()