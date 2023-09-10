const db = require('../utils/db')
class Helpers {
    // async findByParameters(model, parameter, parameterValue) {
    //     return await db.read(model, parameter, parameterValue)
    //     // return source.some(item => parameterValue === item[parameter].toString())
    // }
    async findByParameter(model, parameter, parameterValue) {
        return await db.read(model, parameter, parameterValue)
        // return source.find(item => item[parameter].toString() === parameterValue)
    }
}

module.exports = new Helpers()