"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var db = require('../Utils/db');

var Helpers =
/*#__PURE__*/
function () {
  function Helpers() {
    _classCallCheck(this, Helpers);
  }

  _createClass(Helpers, [{
    key: "checkParameters",
    value: function checkParameters(path, parameter, parameterValue) {
      var source;
      return regeneratorRuntime.async(function checkParameters$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(db.read(path));

            case 2:
              source = _context.sent;
              console.log(source, 'helpers.checkParameters');
              return _context.abrupt("return", source.some(function (item) {
                return parameterValue === item[parameter];
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "findByParameter",
    value: function findByParameter(path, parameter, parameterValue) {
      var source;
      return regeneratorRuntime.async(function findByParameter$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(db.read(path));

            case 2:
              source = _context2.sent;
              return _context2.abrupt("return", source.find(function (item) {
                return item[parameter] === parameterValue;
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "pushInSource",
    value: function pushInSource(path, element) {
      return regeneratorRuntime.async(function pushInSource$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(db.create(path, element));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "deleteElementById",
    value: function deleteElementById(path, id) {
      var deletedElement;
      return regeneratorRuntime.async(function deleteElementById$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(db["delete"](path, id));

            case 2:
              deletedElement = _context4.sent;
              return _context4.abrupt("return", deletedElement);

            case 4:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return Helpers;
}();

module.exports = new Helpers();