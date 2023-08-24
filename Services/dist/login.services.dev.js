"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const fs = require('fs')
var file = require('../Utils/fs');

var LoginServices =
/*#__PURE__*/
function () {
  function LoginServices() {
    _classCallCheck(this, LoginServices);
  }

  _createClass(LoginServices, [{
    key: "getUser",
    value: function getUser(login) {
      var users, user;
      return regeneratorRuntime.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(file.readFile('./users.json'));

            case 2:
              users = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(users.find(function (item) {
                return item.login === login;
              }));

            case 5:
              user = _context.sent;
              return _context.abrupt("return", user);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return LoginServices;
}();

module.exports = new LoginServices();