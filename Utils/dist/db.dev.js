"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const {
//     MongoClient
// } = require('mongodb')
// const mongoDbClient = new MongoClient('mongodb://127.0.0.1:27017')
var helperDb = require('../Helpers/helper.db'); // const helper = require('../Helpers/helper')


var Db =
/*#__PURE__*/
function () {
  function Db() {
    _classCallCheck(this, Db);
  }

  _createClass(Db, [{
    key: "read",
    value: function read(path) {
      var connection, db, data;
      return regeneratorRuntime.async(function read$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(helperDb.getConnection());

            case 3:
              connection = _context.sent;
              _context.next = 6;
              return regeneratorRuntime.awrap(helperDb.useDefaultDb(connection));

            case 6:
              db = _context.sent;
              _context.next = 9;
              return regeneratorRuntime.awrap(db.collection(path).find().toArray());

            case 9:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 16:
              _context.prev = 16;
              connection.close();
              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 13, 16, 19]]);
    }
  }, {
    key: "create",
    value: function create(path, data) {
      var connection, db;
      return regeneratorRuntime.async(function create$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(helperDb.getConnection());

            case 3:
              connection = _context2.sent;
              _context2.next = 6;
              return regeneratorRuntime.awrap(helperDb.useDefaultDb(connection));

            case 6:
              db = _context2.sent;
              _context2.next = 9;
              return regeneratorRuntime.awrap(db.collection(path).insertOne(data));

            case 9:
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.message);

            case 14:
              _context2.prev = 14;
              connection.close();
              return _context2.finish(14);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 11, 14, 17]]);
    } // async writeFile(path, data) {
    //     fs.writeFileSync(path, JSON.stringify(data))
    // }

  }, {
    key: "update",
    value: function update(collection, id, parameter, parameterValue) {
      var connection, db, updateResult;
      return regeneratorRuntime.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(helperDb.getConnection());

            case 3:
              connection = _context3.sent;
              _context3.next = 6;
              return regeneratorRuntime.awrap(helperDb.useDefaultDb(connection));

            case 6:
              db = _context3.sent;
              _context3.next = 9;
              return regeneratorRuntime.awrap(db.collection(collection).updateOne({
                id: id
              }, {
                $set: _defineProperty({}, parameter, parameterValue)
              }));

            case 9:
              updateResult = _context3.sent;
              return _context3.abrupt("return", updateResult);

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0.message);

            case 16:
              _context3.prev = 16;
              connection.close();
              return _context3.finish(16);

            case 19:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 13, 16, 19]]);
    }
  }, {
    key: "delete",
    value: function _delete(path, id) {
      var connection, db, deletedResult;
      return regeneratorRuntime.async(function _delete$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return regeneratorRuntime.awrap(helperDb.getConnection());

            case 3:
              connection = _context4.sent;
              _context4.next = 6;
              return regeneratorRuntime.awrap(helperDb.useDefaultDb(connection));

            case 6:
              db = _context4.sent;
              _context4.next = 9;
              return regeneratorRuntime.awrap(db.collection(path).deleteOne({
                id: id
              }));

            case 9:
              deletedResult = _context4.sent;
              return _context4.abrupt("return", deletedResult);

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0.message);

            case 16:
              _context4.prev = 16;
              connection.close();
              return _context4.finish(16);

            case 19:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 13, 16, 19]]);
    }
  }]);

  return Db;
}();

module.exports = new Db();