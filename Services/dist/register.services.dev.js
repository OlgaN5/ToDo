"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('uuid'),
    v4 = _require.v4;

var helper = require('../Helpers/helper');

var RegisterServices =
/*#__PURE__*/
function () {
  function RegisterServices() {
    _classCallCheck(this, RegisterServices);
  }

  _createClass(RegisterServices, [{
    key: "checkUserParameters",
    value: function checkUserParameters(parameter, parameterValue) {
      return regeneratorRuntime.async(function checkUserParameters$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(helper.checkParameters('users', parameter, parameterValue));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "createUser",
    value: function createUser(user) {
      var id;
      return regeneratorRuntime.async(function createUser$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = v4();
              helper.pushInSource(id, 'users', user);
              return _context2.abrupt("return", user);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return RegisterServices;
}();

module.exports = new RegisterServices();