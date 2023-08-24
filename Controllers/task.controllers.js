const taskService = require('../Services/task.services')
class TaskController {
    async getTasks(idUser) {
        if (!(await taskService.checkTaskParameters('idUser',idUser) )) {
            return "user hasn't tasks"
        }
        const tasks = await taskService.getTasks(idUser)
        console.log(tasks)
        return tasks
    }
    async addTask(idUser, task) {
        task.idUser = idUser
        return await taskService.addTask(task)
    }
    async changeTitle(id, title) {
        return await taskService.changeTitle(id, title)
    }
    async changeisCompleted(id, isComplited) {
        return await taskService.changeisCompleted(id,isComplited)
    }
    async deleteTask(id){
        return await taskService.deleteTask(id)
    }
}
module.exports = new TaskController()