const fs = require('fs')
class LoginServices {
    getUser(login) {
        const data = fs.readFileSync('./users.json')
        const users = JSON.parse(data)
        const user = users.find(item => item.login === login)
        return new Promise(res => res(user))
    }
}
module.exports = new LoginServices()