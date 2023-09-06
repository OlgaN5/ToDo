const {
    v4
} = require('uuid')
const helper = require('../Helpers/helper')
class RegisterServices {
    async checkUserParameters(parameter, parameterValue) {
        return await helper.checkParameters('users', parameter, parameterValue)
    }
    async createUser(user) {
        const id = v4()
        helper.pushInSource(id, 'users', user)
        return user
    }
}

module.exports = new RegisterServices()