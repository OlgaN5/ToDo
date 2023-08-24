const {
    v4
} = require('uuid')
const fs = require('fs')
const file = require('../Utils/fs')
const helper = require('../Helpers/helper')
class RegisterServices {
    async checkUserParameters(parameter, parameterValue) {
        const users = await file.readFile('./users.json')
        return await helper.checkParameters(users, parameter, parameterValue)
    }
    async createUser(user) {
        const users = await file.readFile('./users.json')
        user.id = v4()
        users.push(user)
        await file.writeFile('./users.json', users)
        return user
    }
}

module.exports = new RegisterServices()