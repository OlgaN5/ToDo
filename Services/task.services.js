const file = require('../Utils/fs')
const helper = require('../Helpers/helper')
const {
    v4
} = require('uuid')
class TaskService {
    async checkTaskParameters(parameter, parameterValue) {
        const tasks = await file.readFile('./tasks.json')
        return helper.checkParameters(tasks, parameter, parameterValue)
    }

    // async checkIdUser(idUser) {
    //     const tasks = file.readFile('./tasks.json')
    //     return tasks.some(item => item.idUser === idUser)
    // }
    async getTasks(idUser) {
        const tasks = await file.readFile('./tasks.json')
        return tasks.filter(item => item.idUser === idUser)
    }
    async addTask(task) {
        const tasks = await file.readFile('./tasks.json')
        task.id = v4()
        tasks.push(task)
        file.writeFile('./tasks.json', tasks)
        return task
    }
    async changeTitle(id, title) {
        const tasks = await file.readFile('./tasks.json')
        const task = tasks.find(item => item.id === id)
        task.title = title
        file.writeFile('./tasks.json', tasks)
        return task
    }
    async changeisCompleted(id, isCompleted) {
        const tasks = await file.readFile('./tasks.json')
        const task = tasks.find(item => item.id === id)
       
        task.isCompleted = isCompleted
        console.log(task)
        file.writeFile('./tasks.json', tasks)
        return task
    }
    async deleteTask(id) {
        const tasks = await file.readFile('./tasks.json')
        const taskIndex = tasks.findIndex(item => item.id === id)
        const deletedTask = tasks[taskIndex]
        tasks.splice(taskIndex, 1)
        file.writeFile('./tasks.json', tasks)
        return deletedTask
    }
}
module.exports = new TaskService()