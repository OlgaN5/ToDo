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

var validationIsCompleted = body('isCompleted').notEmpty().isBoolean();
var validationTitle = body('title').notEmpty().escape().isString().trim();
var validationBody = [validationTitle, validationIsCompleted];
var validationParam = [param('id').notEmpty()];
var validationHeader = [header('authorization').notEmpty()];
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
            _context.next = 10;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(taskController.getTasks(req.idUser._id));

        case 5:
          tasks = _context.sent;
          console.log(req.idUser._id);
          res.send(tasks);
          _context.next = 11;
          break;

        case 10:
          res.send({
            errors: result.array()
          });

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          Sentry.captureException(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
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
          // console.log(req.idUser)
          result = validationResult(req);

          if (!result.isEmpty()) {
            _context2.next = 9;
            break;
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(taskController.addTask(req.idUser._id, req.body));

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

router.patch('/:id', validationHeader, authenticateToken, validationTitle, function _callee3(req, res) {
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

router.patch('/:id/isCompleted', validationHeader, authenticateToken, validationIsCompleted, function _callee4(req, res) {
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
module.exports = router;