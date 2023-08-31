"use strict";

var express = require('express');

var router = express.Router();

var taskController = require('../Controllers/task.controllers');

var Sentry = require('@sentry/node');

var _require = require('express-validator'),
    body = _require.body,
    param = _require.param,
    header = _require.header,
    validationResult = _require.validationResult;

var authenticateToken = require('../Utils/Authenticate');

var validationBody = [body('title').notEmpty().escape().isString().trim(), body('isCompleted').notEmpty().isBoolean()];
var validationParam = [param('id').notEmpty()];
var validationHeader = [header('authorization').notEmpty()]; // const authenficateToken = (req, res, next) => {
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

router.get('/', validationHeader, authenticateToken, function _callee(req, res) {
  var result, tasks;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          result = validationResult(req);

          if (!result.isEmpty()) {
            _context.next = 9;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(taskController.getTasks(req.idUser.id));

        case 5:
          tasks = _context.sent;
          res.send(tasks);
          _context.next = 10;
          break;

        case 9:
          res.send({
            errors: result.array()
          });

        case 10:
          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          Sentry.captureException(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
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

router.post('/add', validationHeader, authenticateToken, validationBody, function _callee2(req, res) {
  var result, task;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          result = validationResult(req);

          if (!result.isEmpty()) {
            _context2.next = 9;
            break;
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(taskController.addTask(req.idUser.id, req.body));

        case 5:
          task = _context2.sent;
          res.send(task);
          _context2.next = 10;
          break;

        case 9:
          res.send({
            errors: result.array()
          });

        case 10:
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          Sentry.captureException(_context2.t0);

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
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

router.patch('/:id', validationHeader, authenticateToken, body('title').notEmpty().escape().trim(), function _callee3(req, res) {
  var result, task;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          result = validationResult(req);

          if (!result.isEmpty()) {
            _context3.next = 9;
            break;
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(taskController.changeTitle(req.params.id, req.body.title));

        case 5:
          task = _context3.sent;
          res.send(task);
          _context3.next = 10;
          break;

        case 9:
          res.send({
            errors: result.array()
          });

        case 10:
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          Sentry.captureException(_context3.t0);

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
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

router.patch('/:id/isCompleted', validationHeader, authenticateToken, body('isCompleted').notEmpty().isBoolean(), function _callee4(req, res) {
  var result, task;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          result = validationResult(req);

          if (!result.isEmpty()) {
            _context4.next = 10;
            break;
          }

          console.log(req.body);
          _context4.next = 6;
          return regeneratorRuntime.awrap(taskController.changeisCompleted(req.params.id, req.body.isCompleted));

        case 6:
          task = _context4.sent;
          res.send(task);
          _context4.next = 11;
          break;

        case 10:
          res.send({
            errors: result.array()
          });

        case 11:
          _context4.next = 16;
          break;

        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](0);
          Sentry.captureException(_context4.t0);

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
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

router["delete"]('/:id', validationHeader, authenticateToken, validationParam, function _callee5(req, res) {
  var result, task;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          result = validationResult(req);

          if (!result.isEmpty()) {
            _context5.next = 9;
            break;
          }

          _context5.next = 5;
          return regeneratorRuntime.awrap(taskController.deleteTask(req.params.id));

        case 5:
          task = _context5.sent;
          res.send(task);
          _context5.next = 10;
          break;

        case 9:
          res.send({
            errors: result.array()
          });

        case 10:
          _context5.next = 15;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          Sentry.captureException(_context5.t0);

        case 15:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 12]]);
});
module.exports = router; // app.get('/', (req, res) => {
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