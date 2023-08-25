const file = require('../Utils/fs')
class Helpers {
    async checkParameters(path, parameter, parameterValue) {
        const source = await file.readFile(path)
        return source.some(item => parameterValue === item[parameter])
    }
    async findByParameter(path, parameter, parameterValue) {
        const source = await file.readFile(path)
        return source.find(item => item[parameter] === parameterValue)
    }
    async pushInSource(path, element) {
        const source = await file.readFile(path)
        source.push(element)
        await file.writeFile(path, element)
    }
    async deleteElementById(path,id){
        const source = await file.readFile(path)
        const elementIndex = source.findIndex(item => item.id === id)
        const deletedElement = source[elementIndex]
        source.splice(elementIndex, 1)
        file.writeFile(path, tasks)
        return deletedElement
    }
}

module.exports = new Helpers()