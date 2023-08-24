// const fs = require('fs')
const file = require('../Utils/fs')
class LoginServices {
    async getUser(login) {
        const users = await file.readFile('./users.json')
        const user = await users.find(item => item.login === login)
        return user
    }
}
module.exports = new LoginServices()