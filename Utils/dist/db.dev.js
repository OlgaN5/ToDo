"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mongoose = require('mongoose');

var Task = require('../Models//Tasks');

var User = require('../Models/Users');

var helperDb = require('../Helpers/helper.db');

var Db =
/*#__PURE__*/
function () {
  function Db() {
    _classCallCheck(this, Db);
  }

  _createClass(Db, [{
    key: "read",
    value: function read(path) {
      var connection, model, data;
      return regeneratorRuntime.async(function read$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.t0 = path;
              _context.next = _context.t0 === 'tasks' ? 4 : _context.t0 === 'users' ? 6 : 8;
              break;

            case 4:
              model = Task;
              return _context.abrupt("break", 8);

            case 6:
              model = User;
              return _context.abrupt("break", 8);

            case 8:
              _context.next = 10;
              return regeneratorRuntime.awrap(helperDb.getConnection());

            case 10:
              connection = _context.sent;
              _context.next = 13;
              return regeneratorRuntime.awrap(model.find({}));

            case 13:
              data = _context.sent;
              _context.t1 = console;
              _context.next = 17;
              return regeneratorRuntime.awrap(model.find({}).populate('idUser'));

            case 17:
              _context.t2 = _context.sent;

              _context.t1.log.call(_context.t1, _context.t2);

              return _context.abrupt("return", data);

            case 22:
              _context.prev = 22;
              _context.t3 = _context["catch"](0);
              console.log(_context.t3.message);

            case 25:
              _context.prev = 25;
              connection.disconnect();
              return _context.finish(25);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 22, 25, 28]]);
    }
  }, {
    key: "create",
    value: function create(path, data) {
      var connection, model, result;
      return regeneratorRuntime.async(function create$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.t0 = path;
              _context2.next = _context2.t0 === 'tasks' ? 4 : _context2.t0 === 'users' ? 6 : 8;
              break;

            case 4:
              model = Task;
              return _context2.abrupt("break", 8);

            case 6:
              model = User;
              return _context2.abrupt("break", 8);

            case 8:
              _context2.next = 10;
              return regeneratorRuntime.awrap(helperDb.getConnection());

            case 10:
              connection = _context2.sent;
              _context2.next = 13;
              return regeneratorRuntime.awrap(model.create(data));

            case 13:
              result = _context2.sent;
              console.log(result);
              return _context2.abrupt("return", result);

            case 18:
              _context2.prev = 18;
              _context2.t1 = _context2["catch"](0);
              console.log(_context2.t1.message);

            case 21:
              _context2.prev = 21;
              connection.disconnect();
              return _context2.finish(21);

            case 24:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 18, 21, 24]]);
    }
  }, {
    key: "update",
    value: function update(collection, id, parameter, parameterValue) {
      var connection, model, updateResult;
      return regeneratorRuntime.async(function update$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.t0 = collection;
              _context3.next = _context3.t0 === 'tasks' ? 4 : _context3.t0 === 'users' ? 6 : 8;
              break;

            case 4:
              model = Task;
              return _context3.abrupt("break", 8);

            case 6:
              model = User;
              return _context3.abrupt("break", 8);

            case 8:
              _context3.next = 10;
              return regeneratorRuntime.awrap(helperDb.getConnection());

            case 10:
              connection = _context3.sent;
              _context3.next = 13;
              return regeneratorRuntime.awrap(model.updateOne({
                _id: new mongoose.Types.ObjectId(id)
              }, _defineProperty({}, parameter, parameterValue)));

            case 13:
              updateResult = _context3.sent;
              return _context3.abrupt("return", updateResult);

            case 17:
              _context3.prev = 17;
              _context3.t1 = _context3["catch"](0);
              console.log(_context3.t1.message);

            case 20:
              _context3.prev = 20;
              connection.disconnect();
              return _context3.finish(20);

            case 23:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 17, 20, 23]]);
    }
  }, {
    key: "delete",
    value: function _delete(path, id) {
      var connection, model, deletedResult;
      return regeneratorRuntime.async(function _delete$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.t0 = path;
              _context4.next = _context4.t0 === 'tasks' ? 4 : _context4.t0 === 'users' ? 6 : 8;
              break;

            case 4:
              model = Task;
              return _context4.abrupt("break", 8);

            case 6:
              model = User;
              return _context4.abrupt("break", 8);

            case 8:
              _context4.next = 10;
              return regeneratorRuntime.awrap(helperDb.getConnection());

            case 10:
              connection = _context4.sent;
              _context4.next = 13;
              return regeneratorRuntime.awrap(model.deleteOne({
                _id: new mongoose.Types.ObjectId(id)
              }));

            case 13:
              deletedResult = _context4.sent;
              return _context4.abrupt("return", deletedResult);

            case 17:
              _context4.prev = 17;
              _context4.t1 = _context4["catch"](0);
              console.log(_context4.t1.message);

            case 20:
              _context4.prev = 20;
              connection.disconnect();
              return _context4.finish(20);

            case 23:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 17, 20, 23]]);
    }
  }]);

  return Db;
}();

module.exports = new Db();