"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var taskService = require('../Services/task.services');

var TaskController =
/*#__PURE__*/
function () {
  function TaskController() {
    _classCallCheck(this, TaskController);
  }

  _createClass(TaskController, [{
    key: "getTasks",
    value: function getTasks(idUser) {
      var tasks;
      return regeneratorRuntime.async(function getTasks$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(taskService.checkTaskParameters('idUser', idUser));

            case 2:
              if (_context.sent) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", {
                message: "user hasn't tasks"
              });

            case 4:
              _context.next = 6;
              return regeneratorRuntime.awrap(taskService.getTasks(idUser));

            case 6:
              tasks = _context.sent;
              console.log(tasks);
              return _context.abrupt("return", tasks);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "addTask",
    value: function addTask(idUser, task) {
      return regeneratorRuntime.async(function addTask$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              task.idUser = idUser;
              _context2.next = 3;
              return regeneratorRuntime.awrap(taskService.addTask(task));

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "changeTitle",
    value: function changeTitle(id, title) {
      return regeneratorRuntime.async(function changeTitle$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(taskService.changeParameterOfTask(id, 'title', title));

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "changeisCompleted",
    value: function changeisCompleted(id, isCompleted) {
      return regeneratorRuntime.async(function changeisCompleted$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(taskService.changeParameterOfTask(id, 'isCompleted', isCompleted));

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(id) {
      return regeneratorRuntime.async(function deleteTask$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(taskService.deleteTask(id));

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return TaskController;
}();

module.exports = new TaskController();