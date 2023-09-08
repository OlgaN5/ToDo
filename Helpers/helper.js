const db = require('../utils/db')
class Helpers {
    async checkParameters(model, parameter, parameterValue) {
        const source = await db.read(model)
        return source.some(item => parameterValue === item[parameter].toString())
    }
    async findByParameter(model, parameter, parameterValue) {
        const source = await db.read(model)
        return source.find(item => item[parameter].toString() === parameterValue)
    }
}

module.exports = new Helpers()