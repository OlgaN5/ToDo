"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var mongoDbClient = new MongoClient('mongodb://127.0.0.1:27017');

var HelperDb =
/*#__PURE__*/
function () {
  function HelperDb() {
    _classCallCheck(this, HelperDb);
  }

  _createClass(HelperDb, [{
    key: "getConnection",
    value: function getConnection() {
      return regeneratorRuntime.async(function getConnection$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(mongoDbClient.connect());

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
    key: "useDefaultDb",
    value: function useDefaultDb(connection) {
      return regeneratorRuntime.async(function useDefaultDb$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(connection.db('ToDo'));

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return HelperDb;
}();

module.exports = new HelperDb();