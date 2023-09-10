const db = require('../utils/db')
const helper = require('../helpers/helper')
const Task = require('../models/Tasks')
class TaskService {
    async getTasks(idUser) {
      
       return await db.read(Task,'idUser', idUser)
    }
    async addTask(task) {
        return await db.create(Task,task)         
    }
    async changeParameterOfTask(id, parameter, parameterValue) {
        const updateResult = await db.update(Task,id, parameter, parameterValue)
        return updateResult
    }
    async deleteTask(id) {
        return await db.delete(Task, id)
    }
}
module.exports = new TaskService()