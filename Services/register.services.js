const {v4} = require('uuid')
const fs = require('fs')
class RegisterServices {
    isEmail(email) {
        const data = fs.readFileSync('./users.json', 'utf8')
        const users = JSON.parse(data)
        return new Promise(res => res(users.some(item => email === item.email)))
    }
    isLogin(login) {
        const data = fs.readFileSync('./users.json', 'utf8')
        const users = JSON.parse(data)
        return new Promise(res => res(users.some(item => login === item.login)))
    }
    createUser(user) {
        const data = fs.readFileSync('./users.json', 'utf8')
        const users = JSON.parse(data)
        user.id = v4()
        users.push(user)
        fs.writeFileSync('./users.json', JSON.stringify(users))
        return new Promise(res => res(user))
    }
}

module.exports = new RegisterServices()