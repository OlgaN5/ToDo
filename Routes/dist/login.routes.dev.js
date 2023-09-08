"use strict";

var loginControllers = require('../Controllers/login.controllers');

var express = require('express');

var router = express.Router();

var Sentry = require('@sentry/node');

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;

var validation = [body('login').notEmpty().escape(), body('password').notEmpty()];
/**
 * @swagger
 * /api/login/:
 *   post:
 *     summary: ggfdsgfdgfdfg
 *     tags: 
 *       - Login
 *     requestBody:
 *        description: task
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                login: 
 *                  type: string
 *                  default: login
 *                password: 
 *                  type: string
 *                  default: fff444
 *     description: use to login and get token
 *     responses:
 *       '200': 
 *         description: A succesful request
 *       '401': 
 *         description: Unautorized
 */

router.post('/', validation, function _callee(req, res) {
  var result, token;
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
          return regeneratorRuntime.awrap(loginControllers.login(req.body));

        case 5:
          token = _context.sent;

          if (token) {
            console.log(token);
            res.send({
              token: token
            });
          } else {
            res.send('token not received');
          }

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
module.exports = router;