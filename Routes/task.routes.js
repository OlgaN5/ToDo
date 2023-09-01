const express = require('express')
const router = express.Router()
const taskController = require('../Controllers/task.controllers')
const Sentry = require('@sentry/node')
const {
    body,
    param,
    header,
    validationResult
} = require('express-validator')
const authenticateToken = require('../Utils/Authenticate')

const validationBody = [
    body('title').notEmpty().escape().isString().trim(),
    body('isCompleted').notEmpty().isBoolean()
]
const validationParam = [
    param('id').notEmpty(),

]
const validationHeader = [
    header('authorization').notEmpty()
]

// const authenficateToken = (req, res, next) => {
//     try {
//         const authHeader = req.headers.authorization
//         const token = authHeader?.split(' ')[1]
//         if (!token) res.sendStatus(401)
//         jwt.verify(token, process.env.SECRET_KEY, (err, id) => {
//             if (err) throw new Error('token is invalid')
//             req.idUser = id
//             next()
//         })
//     } catch (e) {
//         Sentry.captureException(e)
//         res.sendStatus(403)
//     }

// }

/**
 * @swagger
 * /api/task/:
 *   get:
 *     title: ggg
 *     security:
 *       - bearerAuth: []
 *     tags: 
 *       - Task
 *     description: use to get all tasks of user
 *     responses:
 *       '200': 
 *         description: A succesful request
 *       '401': 
 *         description: Unauthorized
 */
//get tasks
router.get('/', validationHeader, authenticateToken, async (req, res) => {
    try {
        console.log('tasks')
        const result = validationResult(req)
        if (result.isEmpty()) {
            const tasks = await taskController.getTasks(req.idUser.id)
            console.log(tasks)
            res.send(tasks)
        } else {
            res.send({
                errors: result.array()
            })
        }
    } catch (e) {
        Sentry.captureException(e)
    }
})
/**
 * @swagger
 * /api/task/add:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags: 
 *       - Task
 *     requestBody:
 *        description: task
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title: 
 *                  type: string
 *                  value: title
 *                isCompleted:
 *                  type: boolean
 *                  default: false
 *     description: use to create task
 *     responses:
 *       '200': 
 *         description: A succesful request
 *       '401': 
 *         description: Unauthorized
 */
//add task
router.post('/add', validationHeader, authenticateToken, validationBody, async (req, res) => {
    try {
        const result = validationResult(req)
        if (result.isEmpty()) {
            const task = await taskController.addTask(req.idUser.id, req.body)
            res.send(task)
        } else {
            res.send({
                errors: result.array()
            })
        }
    } catch (e) {
        Sentry.captureException(e)
    }
})

/**
 * @swagger
 * /api/task/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     tags: 
 *       - Task
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of task
 *     requestBody:
 *        description: task
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                title: 
 *                  type: string
 *                  default: title
 *     description: use to change title of task
 *     responses:
 *       '200': 
 *         description: A succesful request
 *       '401': 
 *         description: Unauthorized
 */
//change title
router.patch('/:id', validationHeader, authenticateToken, body('title').notEmpty().escape().trim(), async (req, res) => {
    try {
        const result = validationResult(req)
        if (result.isEmpty()) {
            const task = await taskController.changeTitle(req.params.id, req.body.title)
            res.send(task)
        } else {
            res.send({
                errors: result.array()
            })
        }
    } catch (e) {
        Sentry.captureException(e)
    }
})

/**
 * @swagger
 * /api/task/{id}/isCompleted:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     tags: 
 *       - Task
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of task
 *     requestBody:
 *        description: task
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                isCompleted: 
 *                  type: boolean
 *                  default: false
 *     description: use to change isCompleted of task
 *     responses:
 *       '200': 
 *         description: A succesful request
 *       '401': 
 *         description: Unauthorized
 */
//change isCompleted
router.patch('/:id/isCompleted', validationHeader, authenticateToken, body('isCompleted').notEmpty().isBoolean(), async (req, res) => {
    try {
        const result = validationResult(req)
        if (result.isEmpty()) {
            console.log(req.body)
            const task = await taskController.changeisCompleted(req.params.id, req.body.isCompleted)
            res.send(task)
        } else {
            res.send({
                errors: result.array()
            })
        }
    } catch (e) {
        Sentry.captureException(e)
    }
})

/**
 * @swagger
 * /api/task/{id}:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     tags: 
 *       - Task
 *     parameters: 
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of task
 *     description: use to delete task
 *     responses:
 *       '200': 
 *         description: A succesful request
 *       '401': 
 *         description: Unauthorized
 */

//delete task
router.delete('/:id', validationHeader, authenticateToken, validationParam, async (req, res) => {
    try {
        const result = validationResult(req)
        if (result.isEmpty()) {
            const task = await taskController.deleteTask(req.params.id)
            res.send(task)
        } else {
            res.send({
                errors: result.array()
            })
        }
    } catch (e) {
        Sentry.captureException(e)
    }
})

module.exports = router






// app.get('/', (req, res) => {
//     //логика для получения данных
//     res.send(data)
// })

// app.delete('/delete', (req, res) => {
//     //логика для удаления данных
//     res.send(deletedData)
// })

// //api/edit/1
// app.put('/edit/:id', (req, res) => {
//     //логика для изменения user по id
//     //req.body - для получения тела
//     //req.params -  для получения параметра id из url
//     res.send(createdUser)
// })

// //api/create
// app.post('/create', (req, res) => {
//     //логика для добавления user
//     //req.body - для получения тела
//     res.send(editedData)
// })

// //api/editAge?23
// app.patch('/edit', (req, res) => {
//     //логика для редактирования возраста user, которые имеют возраст 23
//     //req.body - для получения тела
//     //req.query - для получения параметров после "?"
//     res.send(editedUser)
// })


// const users = []

// const user = {
//     name: 'Ivan',
//     age: 25
// }


