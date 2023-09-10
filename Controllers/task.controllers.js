const Sentry = require('@sentry/node')
const taskService = require('../services/task.services')
const {
    validationResult
} = require('express-validator')
class TaskController {
    getTasks = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const tasks = await taskService.getTasks(req.idUser._id)
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
    addTask = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                req.body.idUser = req.idUser._id
                const task = await taskService.addTask( req.body)
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
    changeisCompleted = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const task = await  taskService.changeParameterOfTask(req.params.id, 'isCompleted', req.body.isCompleted)
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
    changeTitle = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const task = await taskService.changeParameterOfTask(req.params.id, 'title', req.body.title)
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
    deleteTask = async (req, res) => {
        try {
            const result = validationResult(req)
            if (result.isEmpty()) {
                const task = await taskService.deleteTask(req.params.id)
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
}
module.exports = new TaskController()