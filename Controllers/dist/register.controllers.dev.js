"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var bcrypt = require('bcrypt');

var Sentry = require('@sentry/node');

var registerServices = require('../services/register.services');

var saltRounds = 2;

var _require = require('express-validator'),
    validationResult = _require.validationResult;

var RegisterControllers =
/*#__PURE__*/
function () {
  function RegisterControllers() {
    _classCallCheck(this, RegisterControllers);
  }

  _createClass(RegisterControllers, [{
    key: "register",
    value: function register(req, res) {
      var result, _req$body, email, login, password, isEmail, isLogin, hashedPassword, createdUser;

      return regeneratorRuntime.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              result = validationResult(req);
              console.log(result);

              if (!result.isEmpty()) {
                _context.next = 24;
                break;
              }

              _req$body = req.body, email = _req$body.email, login = _req$body.login, password = _req$body.password;
              _context.next = 7;
              return regeneratorRuntime.awrap(registerServices.findByParameters('email', email));

            case 7:
              isEmail = _context.sent;
              _context.next = 10;
              return regeneratorRuntime.awrap(registerServices.findByParameters('login', login));

            case 10:
              isLogin = _context.sent;

              if (!(isEmail.length !== 0)) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", res.send({
                message: 'email is exist'
              }));

            case 13:
              if (!(isLogin.length !== 0)) {
                _context.next = 15;
                break;
              }

              return _context.abrupt("return", res.send({
                message: 'login is exist'
              }));

            case 15:
              _context.next = 17;
              return regeneratorRuntime.awrap(bcrypt.hashSync(password, saltRounds));

            case 17:
              hashedPassword = _context.sent;
              _context.next = 20;
              return regeneratorRuntime.awrap(registerServices.createUser({
                email: email,
                login: login,
                password: hashedPassword
              }));

            case 20:
              createdUser = _context.sent;
              return _context.abrupt("return", res.send(createdUser));

            case 24:
              console.log('TYUIOIUYGFDFGHJKJHGF');
              res.send({
                errors: result.array()
              });

            case 26:
              _context.next = 31;
              break;

            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](0);
              Sentry.captureException(_context.t0);

            case 31:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 28]]);
    }
  }]);

  return RegisterControllers;
}();

module.exports = new RegisterControllers();