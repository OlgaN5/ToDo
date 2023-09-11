"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var mongoose = require('mongoose');

var Task = require('../models/Tasks');

var User = require('../models/Users');

var helperDb = require('../helpers/helper.db');

var db = require('../config/database');

var Db =
/*#__PURE__*/
function () {
  function Db() {
    _classCallCheck(this, Db);
  }

  _createClass(Db, [{
    key: "read",
    value: function read(model, parameter, parameterValue) {
      var connection, data;
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
              return regeneratorRuntime.awrap(model.find(_defineProperty({}, parameter, parameterValue)));

            case 6:
              data = _context.sent;
              return _context.abrupt("return", data);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0.message);

            case 13:
              _context.prev = 13;
              connection.disconnect();
              return _context.finish(13);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 10, 13, 16]]);
    }
  }, {
    key: "create",
    value: function create(model, data) {
      var connection, result;
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
              return regeneratorRuntime.awrap(model.create(data));

            case 6:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0.message);

            case 13:
              _context2.prev = 13;
              connection.disconnect();
              return _context2.finish(13);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 10, 13, 16]]);
    }
  }, {
    key: "update",
    value: function update(model, id, parameter, parameterValue) {
      var connection, updateResult;
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
              return regeneratorRuntime.awrap(model.updateOne({
                _id: new mongoose.Types.ObjectId(id)
              }, _defineProperty({}, parameter, parameterValue)));

            case 6:
              updateResult = _context3.sent;
              return _context3.abrupt("return", updateResult);

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0.message);

            case 13:
              _context3.prev = 13;
              connection.disconnect();
              return _context3.finish(13);

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 10, 13, 16]]);
    }
  }, {
    key: "delete",
    value: function _delete(model, id) {
      var connection, deletedResult;
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
              return regeneratorRuntime.awrap(model.deleteOne({
                _id: new mongoose.Types.ObjectId(id)
              }));

            case 6:
              deletedResult = _context4.sent;
              return _context4.abrupt("return", deletedResult);

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0.message);

            case 13:
              _context4.prev = 13;
              connection.disconnect();
              return _context4.finish(13);

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[0, 10, 13, 16]]);
    }
  }]);

  return Db;
}();

module.exports = new Db();