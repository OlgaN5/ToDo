const taskService = require('../Services/task.services')
class TaskController {
    async getTasks(idUser) {
        if (!(await taskService.checkTaskParameters('idUser', idUser))) {
            // console.log("taskcontrollers getTasks")
            return "user hasn't tasks"
        }
        console.log("taskcontrollers getTasks")
        const tasks = await taskService.getTasks(idUser)
        return tasks
    }
    async addTask(idUser, task) {
        task.idUser = idUser
        return await taskService.addTask(task)
    }
    async changeTitle(id, title) {
        return await taskService.changeParameterOfTask(id, 'title', title)
        // return await taskService.changeTitle(id, title)
    }
    async changeisCompleted(id, isCompleted) {
        return await taskService.changeParameterOfTask(id, 'isCompleted', isCompleted)
        // return await taskService.changeisCompleted(id, isComplited)
    }
    async deleteTask(id) {
        return await taskService.deleteTask(id)
    }
}
module.exports = new TaskController()