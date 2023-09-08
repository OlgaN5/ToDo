const helper = require('../Helpers/helper')
class RegisterServices {
    async checkUserParameters(parameter, parameterValue) {
        return await helper.checkParameters('users', parameter, parameterValue)
    }
    async createUser(user) {
        helper.pushInSource('users', user)
        return user
    }
}
module.exports = new RegisterServices()