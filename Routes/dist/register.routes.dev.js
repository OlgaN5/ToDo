"use strict";

var Sentry = require('@sentry/node');

var express = require('express');

var router = express.Router();

var registerControllers = require('../Controllers/register.controllers');

var _require = require('express-validator'),
    body = _require.body,
    validationResult = _require.validationResult;
/**
 * @swagger
 * /api/register/:
 *   post:
 *     tags: 
 *       - Register
 *     requestBody:
 *        description: task
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email: 
 *                  type: string
 *                  default: email@gmail.com
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


var validation = [body('email').notEmpty().escape().isEmail(), body('login').notEmpty().escape().isLength({
  min: 5
}), body('password').notEmpty().isLength({
  min: 6,
  max: 15
})];
router.post('/', validation, function _callee(req, res) {
  var result, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          result = validationResult(req);
          console.log(result);

          if (!result.isEmpty()) {
            _context.next = 10;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(registerControllers.register(req.body));

        case 6:
          user = _context.sent;
          res.send(user);
          _context.next = 12;
          break;

        case 10:
          console.log('TYUIOIUYGFDFGHJKJHGF');
          res.send({
            errors: result.array()
          });

        case 12:
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          Sentry.captureException(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 14]]);
});
module.exports = router;