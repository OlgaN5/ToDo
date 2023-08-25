const file = require('../Utils/fs')
const helper = require('../Helpers/helper')
const {
    v4
} = require('uuid')
class TaskService {
    async checkTaskParameters(parameter, parameterValue) {
        return helper.checkParameters('./tasks.json', parameter, parameterValue)
    }
    async getTasks(idUser) {
        const tasks = await file.readFile('./tasks.json')
        return tasks.filter(item => item.idUser === idUser)
    }
    async addTask(task) {
        task.id = v4()
        await helper.pushInSource('./tasks.json', task)
        return task
    }
    async changeParameterOfTask(id, parameter, parameterValue) {
        const tasks = await file.readFile(path)
        const task = tasks.find(item => item[parameter] === parameterValue)
        // const task = helper.findByParameter('./tasks.json', 'id', id)
        task[parameter] = parameterValue
        file.writeFile('./tasks.json', tasks) //изза этого не могу заменить на helper.findByParameter(массив будет не доступен)
        return task
    }
    async deleteTask(id) {
        // const tasks = await file.readFile('./tasks.json')
        // const taskIndex = tasks.findIndex(item => item.id === id)
        // const deletedTask = tasks[taskIndex]
        // tasks.splice(taskIndex, 1)
        // file.writeFile('./tasks.json', tasks)
        // return deletedTask
        return await helper.deleteElementById('./tasks.json', id)
    }
}
module.exports = new TaskService()