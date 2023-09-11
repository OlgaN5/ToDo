const db = require('../utils/db')
class Helpers {
    async findByParameter(model, parameter, parameterValue) {
        return await db.read(model, parameter, parameterValue)
    }
}

module.exports = new Helpers()