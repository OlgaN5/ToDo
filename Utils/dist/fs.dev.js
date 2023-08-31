"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('mongodb'),
    MongoClient = _require.MongoClient;

var mongoDbClient = new MongoClient('mongodb://Timeweb:cloud@127.0.0.1:27017/?authMechanism=DEFAULT');

var fs = require('fs');

var Db =
/*#__PURE__*/
function () {
  function Db() {
    _classCallCheck(this, Db);
  }

  _createClass(Db, [{
    key: "read",
    value: function read(path) {
      var data;
      return regeneratorRuntime.async(function read$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(mongoDbClient.connect());

            case 2:
              data = mongoDbClient.db('ToDo').collection(path).find().toArray(); // const data = fs.readFileSync(path, 'utf8')

              mongoDbClient.close(); // const arr = JSON.parse(data)

              return _context.abrupt("return", data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
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
              mongoDbClient.db('ToDo').collection(path).insertOne(data);
              mongoDbClient.close();

            case 4:
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
    value: function update(path, id, parameter, parameterValue) {
      var updateResult;
      return regeneratorRuntime.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(mongoDbClient.connect());

            case 2:
              updateResult = mongoDbClient.db('ToDo').collection(path).updateOne({
                id: id
              }, {
                $set: {
                  parameter: parameterValue
                }
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