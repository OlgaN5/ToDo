"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var bcrypt = require('bcrypt');

var registerServices = require('../Services/register.services');

var saltRounds = 2;

var RegisterControllers =
/*#__PURE__*/
function () {
  function RegisterControllers() {
    _classCallCheck(this, RegisterControllers);
  }

  _createClass(RegisterControllers, [{
    key: "register",
    value: function register(user) {
      var email, login, password, isEmail, isLogin, hashedPassword, createdUser;
      return regeneratorRuntime.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = user.email, login = user.login, password = user.password;
              _context.next = 3;
              return regeneratorRuntime.awrap(registerServices.checkUserParameters('email', email));

            case 3:
              isEmail = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(registerServices.checkUserParameters('login', login));

            case 6:
              isLogin = _context.sent;

              if (!isEmail) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", 'email is exist');

            case 9:
              if (!isLogin) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", 'login is exist');

            case 11:
              _context.next = 13;
              return regeneratorRuntime.awrap(bcrypt.hashSync(password, saltRounds));

            case 13:
              hashedPassword = _context.sent;
              _context.next = 16;
              return regeneratorRuntime.awrap(registerServices.createUser({
                email: email,
                login: login,
                password: hashedPassword
              }));

            case 16:
              createdUser = _context.sent;
              return _context.abrupt("return", createdUser);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return RegisterControllers;
}();

module.exports = new RegisterControllers();