const db = require('../Utils/db')
const helper = require('../Helpers/helper')

class TaskService {
    async checkTaskParameters(parameter, parameterValue) {
        return await helper.checkParameters('tasks', parameter, parameterValue)
    }
    async getTasks(idUser) {
        const tasks = await db.read('tasks')
        return tasks.filter(item => item.idUser.toString() === idUser)
    }
    async addTask(task) {
        return await helper.pushInSource('tasks', task)
         
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