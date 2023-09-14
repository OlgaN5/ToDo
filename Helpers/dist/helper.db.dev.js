"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mongoose = require('mongoose');

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
              return regeneratorRuntime.awrap(mongoose.connect('mongodb+srv://authumn0:evdSX8SY62LfnvME@cluster0.vpivwzy.mongodb.net/', {
                useNewUrlParser: true,
                useUnifiedTopology: true
              }));

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return HelperDb;
}();

module.exports = new HelperDb();