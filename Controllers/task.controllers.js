const Sentry = require('@sentry/node')
const taskService = require('../services/task.services')
const {
    validationResult
} = require('express-validator')
class TaskController {
    processDelete = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const task = await this.deleteTask(req.params.id)
                res.send(task)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    processChacgeIsCompleted = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                console.log(req.body)
                const task = await this.changeisCompleted(req.params.id, req.body.isCompleted)
                res.send(task)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    processChacgeTitle = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const task = await this.changeTitle(req.params.id, req.body.title)
                res.send(task)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    processGettingTasks = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const tasks = await this.getTasks(req.idUser._id)
                console.log(req.idUser._id)
                res.send(tasks)
            } else {
                res.send({
                    errors: result.array()
                })
            }

        } catch (e) {
            Sentry.captureException(e)
        }
    }
    processAddTask = async (req, res) => {
        try {
            // console.log(req.idUser)
            const result = validationResult(req)
            if (result.isEmpty()) {
                const task = await this.addTask(req.idUser._id, req.body)
                res.send(task)
            } else {
                res.send({
                    errors: result.array()
                })
            }
        } catch (e) {
            Sentry.captureException(e)
        }
    }
    async getTasks(idUser) {
        if (!(await taskService.checkTaskParameters('idUser', idUser))) {
            return {
                message: "user hasn't tasks"
            }
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