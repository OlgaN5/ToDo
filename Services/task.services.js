const fs = require('fs')
const {
    v4
} = require('uuid')
class TaskService {
    checkIdUser(idUser) {
        const data = fs.readFileSync('./tasks.json', 'utf8')
        const tasks = JSON.parse(data)
        return new Promise(res => res(tasks.some(item => item.idUser === idUser)))
    }
    getTasks(idUser) {
        const data = fs.readFileSync('./tasks.json', 'utf8')
        const tasks = JSON.parse(data)
        return new Promise(res => res(tasks.filter(item => item.idUser === idUser)))
    }
    addTask(task) {
        const data = fs.readFileSync('./tasks.json', 'utf8')
        const tasks = JSON.parse(data)
        task.id = v4()
        tasks.push(task)
        fs.writeFileSync('./tasks.json', JSON.stringify(tasks))
        return new Promise(res => res(task))
    }
    changeTitle(id, title) {
        const data = fs.readFileSync('./tasks.json', 'utf8')
        const tasks = JSON.parse(data)
        const task = tasks.find(item => item.id === id)
        task.title = title
        fs.writeFileSync('./tasks.json', JSON.stringify(tasks))
        return new Promise(res => res(task))
    }
    changeisCompleted(id, isCompleted) {
        const data = fs.readFileSync('./tasks.json', 'utf8')
        const tasks = JSON.parse(data)
        const task = tasks.find(item => item.id === id)
        task.isCompleted = isCompleted
        fs.writeFileSync('./tasks.json', JSON.stringify(tasks))
        return new Promise(res => res(task))
    }
    deleteTask(id){
        const data = fs.readFileSync('./tasks.json', 'utf8')
        const tasks = JSON.parse(data)
        const taskIndex = tasks.findIndex(item => item.id === id)
        const deletedTask = tasks[taskIndex]
        tasks.splice(taskIndex,1)
        fs.writeFileSync('./tasks.json', JSON.stringify(tasks))
        return new Promise(res => res(deletedTask))
    }
}
module.exports = new TaskService()