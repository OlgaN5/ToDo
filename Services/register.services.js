const db = require('../utils/db')
const helper = require('../helpers/helper')
const User = require('../models/Users')
class RegisterServices {
    async findByParameters(parameter, parameterValue) {
        return await helper.findByParameter(User, parameter, parameterValue)
    }y
    async createUser(user) {        
        return await db.create(User,user)
    }
}
module.exports = new RegisterServices()