const db = require('../Utils/db')
class Helpers {
    async checkParameters(path, parameter, parameterValue) {
        const source = await db.read(path)
        // console.log('helpers,', source,parameterValue)
        return source.some(item => parameterValue === item[parameter].toString())// why false?
    }
    async findByParameter(path, parameter, parameterValue) {
        const source = await db.read(path)
        return source.find(item => item[parameter].toString() === parameterValue)
    }
    async pushInSource(path, element) {
       return await db.create(path,element)
    }
    async deleteElementById(path,id){
        const deletedElement = await db.delete(path,id)
        return deletedElement
    }
}

module.exports = new Helpers()