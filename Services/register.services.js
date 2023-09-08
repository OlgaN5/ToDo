const helper = require('../Helpers/helper')
const User = require('../models/Users')
class RegisterServices {
    async checkUserParameters(parameter, parameterValue) {
        return await helper.checkParameters(User, parameter, parameterValue)
    }
    async createUser(user) {
        helper.pushInSource(User, user)
        return user
    }
}
module.exports = new RegisterServices()