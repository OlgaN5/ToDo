const db = require('../Utils/db')
const helper = require('../Helpers/helper')
const Task = require('../Models/Tasks')
class TaskService {
    async checkTaskParameters(parameter, parameterValue) {
        return await helper.checkParameters(Task, parameter, parameterValue)
    }
    async getTasks(idUser) {
        const tasks = await db.read(Task)
        return tasks.filter(item => item.idUser.toString() === idUser)
    }
    async addTask(task) {
        return await db.create(Task,task)         
    }
    async changeParameterOfTask(id, parameter, parameterValue) {
        const updateResult = db.update(Task,id, parameter, parameterValue)
        return updateResult
    }
    async deleteTask(id) {
        return await db.delete(Task, id)
    }
}
module.exports = new TaskService()