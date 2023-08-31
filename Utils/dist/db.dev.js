"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var mongoDbClient = new MongoClient('mongodb://127.0.0.1:27017');

var Db =
/*#__PURE__*/
function () {
  function Db() {
    _classCallCheck(this, Db);
  }

  _createClass(Db, [{
    key: "read",
    value: function read(path) {
      var connection, _data;

      return regeneratorRuntime.async(function read$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(mongoDbClient.connect());

            case 3:
              connection = _context.sent;
              console.log('1111111111');
              _context.next = 7;
              return regeneratorRuntime.awrap(mongoDbClient.db('ToDo').collection(path).find().toArray());

            case 7:
              _data = _context.sent;
              console.log('222222222222');
              connection.close();
              console.log(_data);
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 16:
              return _context.abrupt("return", data);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 13]]);
    }
  }, {
    key: "create",
    value: function create(path, data) {
      return regeneratorRuntime.async(function create$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(mongoDbClient.connect());

            case 2:
              console.log('2222222');
              mongoDbClient.db('ToDo').collection(path).insertOne(data);
              mongoDbClient.close();

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    } // async writeFile(path, data) {
    //     fs.writeFileSync(path, JSON.stringify(data))
    // }

  }, {
    key: "update",
    value: function update(collection, id, parameter, parameterValue) {
      var updateResult;
      return regeneratorRuntime.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(mongoDbClient.connect());

            case 2:
              updateResult = mongoDbClient.db('ToDo').collection(collection).updateOne({
                id: id
              }, {
                $set: _defineProperty({}, parameter, parameterValue)
              });
              mongoDbClient.close();
              return _context3.abrupt("return", updateResult);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "delete",
    value: function _delete(path, id) {
      var deletedResult;
      return regeneratorRuntime.async(function _delete$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(mongoDbClient.connect());

            case 2:
              deletedResult = mongoDbClient.db('ToDo').collection(path).deleteOne({
                id: id
              });
              mongoDbClient.close();
              return _context4.abrupt("return", deletedResult);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }]);

  return Db;
}();

module.exports = new Db();