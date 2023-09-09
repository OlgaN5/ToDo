const db = require('../utils/db')
const helper = require('../helpers/helper')
const User = require('../models/Users')
class RegisterServices {
    async checkUserParameters(parameter, parameterValue) {
        return await helper.checkParameters(User, parameter, parameterValue)
    }
    async createUser(user) {        
        return await db.create(User,user)
    }
}
module.exports = new RegisterServices()