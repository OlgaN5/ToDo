const taskService = require('../services/task.services')
class TaskController {
    async getTasks(idUser) {
        if (!(await taskService.checkTaskParameters('idUser', idUser))) {
            return {message: "user hasn't tasks"}
        }
        
        const tasks = await taskService.getTasks(idUser)
        return tasks
    }
    async addTask(idUser, task) {
        task.idUser = idUser
        return await taskService.addTask(task)
    }
    async changeTitle(id, title) {
        return await taskService.changeParameterOfTask(id, 'title', title)
    }
    async changeisCompleted(id, isCompleted) {
        return await taskService.changeParameterOfTask(id, 'isCompleted', isCompleted)
    }
    async deleteTask(id) {
        return await taskService.deleteTask(id)
    }
}
module.exports = new TaskController()