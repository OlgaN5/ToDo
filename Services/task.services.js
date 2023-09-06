const db = require('../Utils/db')
const helper = require('../Helpers/helper')
const {
    v4
} = require('uuid')
class TaskService {
    async checkTaskParameters(parameter, parameterValue) {
        return helper.checkParameters('tasks', parameter, parameterValue)
    }
    async getTasks(idUser) {
        const tasks = await db.read('tasks')
        return tasks.filter(item => item.idUser === idUser)
    }
    async addTask(idUser, task) {
        console.log(task)
        task.id = v4()
        await helper.pushInSource(idUser,'tasks', task)
        return task
    }
    async changeParameterOfTask(id, parameter, parameterValue) {
        const updateResult = db.update('tasks',id, parameter, parameterValue)
        return updateResult
    }
    async deleteTask(id) {
        return await helper.deleteElementById('tasks', id)
    }
}
module.exports = new TaskService()