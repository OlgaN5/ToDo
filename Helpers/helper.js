const db = require('../Utils/db')
class Helpers {
    async checkParameters(path, parameter, parameterValue) {
        const source = await db.read(path)
        console.log(source)
        return source.some(item => parameterValue === item[parameter])
    }
    async findByParameter(path, parameter, parameterValue) {
        const source = await db.read(path)
        return source.find(item => item[parameter] === parameterValue)
    }
    async pushInSource(idUser, path, element) {
        await db.create(idUser, path,element)
    }
    async deleteElementById(path,id){
        const deletedElement = await db.delete(path,id)
        return deletedElement
    }
}

module.exports = new Helpers()