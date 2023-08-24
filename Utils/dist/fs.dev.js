"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require('fs');

var File =
/*#__PURE__*/
function () {
  function File() {
    _classCallCheck(this, File);
  }

  _createClass(File, [{
    key: "readFile",
    value: function readFile(path) {
      var data, arr;
      return regeneratorRuntime.async(function readFile$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = fs.readFileSync(path, 'utf8');
              arr = JSON.parse(data);
              return _context.abrupt("return", arr);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "writeFile",
    value: function writeFile(path, data) {
      return regeneratorRuntime.async(function writeFile$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              fs.writeFileSync(path, JSON.stringify(data));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return File;
}();

module.exports = new File();