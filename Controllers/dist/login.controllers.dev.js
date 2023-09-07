"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var loginServices = require('../Services/login.services');

var jwt = require('jsonwebtoken');

var bcrypt = require('bcrypt');

var LoginControllers =
/*#__PURE__*/
function () {
  function LoginControllers() {
    _classCallCheck(this, LoginControllers);
  }

  _createClass(LoginControllers, [{
    key: "login",
    value: function login(data) {
      var login, password, user, compareUser, _id, token;

      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              login = data.login, password = data.password;
              _context.next = 3;
              return regeneratorRuntime.awrap(loginServices.getUser(login));

            case 3:
              user = _context.sent;
              console.log(user);

              if (!user) {
                _context.next = 13;
                break;
              }

              _context.next = 8;
              return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

            case 8:
              compareUser = _context.sent;
              _id = user._id;

              if (!compareUser) {
                _context.next = 13;
                break;
              }

              token = jwt.sign({
                _id: _id
              }, process.env.SECRET_KEY);
              return _context.abrupt("return", token);

            case 13:
              return _context.abrupt("return", null);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return LoginControllers;
}();

module.exports = new LoginControllers();