"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var file = require('../Utils/fs');

var helper = require('../Helpers/helper');

var _require = require('uuid'),
    v4 = _require.v4;

var TaskService =
/*#__PURE__*/
function () {
  function TaskService() {
    _classCallCheck(this, TaskService);
  }

  _createClass(TaskService, [{
    key: "checkTaskParameters",
    value: function checkTaskParameters(parameter, parameterValue) {
      var tasks;
      return regeneratorRuntime.async(function checkTaskParameters$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(file.readFile('./tasks.json'));

            case 2:
              tasks = _context.sent;
              return _context.abrupt("return", helper.checkParameters(tasks, parameter, parameterValue));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    } // async checkIdUser(idUser) {
    //     const tasks = file.readFile('./tasks.json')
    //     return tasks.some(item => item.idUser === idUser)
    // }

  }, {
    key: "getTasks",
    value: function getTasks(idUser) {
      var tasks;
      return regeneratorRuntime.async(function getTasks$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(file.readFile('./tasks.json'));

            case 2:
              tasks = _context2.sent;
              return _context2.abrupt("return", tasks.filter(function (item) {
                return item.idUser === idUser;
              }));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "addTask",
    value: function addTask(task) {
      var tasks;
      return regeneratorRuntime.async(function addTask$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(file.readFile('./tasks.json'));

            case 2:
              tasks = _context3.sent;
              task.id = v4();
              tasks.push(task);
              file.writeFile('./tasks.json', tasks);
              return _context3.abrupt("return", task);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "changeTitle",
    value: function changeTitle(id, title) {
      var tasks, task;
      return regeneratorRuntime.async(function changeTitle$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(file.readFile('./tasks.json'));

            case 2:
              tasks = _context4.sent;
              task = tasks.find(function (item) {
                return item.id === id;
              });
              task.title = title;
              file.writeFile('./tasks.json', tasks);
              return _context4.abrupt("return", task);

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "changeisCompleted",
    value: function changeisCompleted(id, isCompleted) {
      var tasks, task;
      return regeneratorRuntime.async(function changeisCompleted$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(file.readFile('./tasks.json'));

            case 2:
              tasks = _context5.sent;
              task = tasks.find(function (item) {
                return item.id === id;
              });
              task.isCompleted = isCompleted;
              console.log(task);
              file.writeFile('./tasks.json', tasks);
              return _context5.abrupt("return", task);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }, {
    key: "deleteTask",
    value: function deleteTask(id) {
      var tasks, taskIndex, deletedTask;
      return regeneratorRuntime.async(function deleteTask$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(file.readFile('./tasks.json'));

            case 2:
              tasks = _context6.sent;
              taskIndex = tasks.findIndex(function (item) {
                return item.id === id;
              });
              deletedTask = tasks[taskIndex];
              tasks.splice(taskIndex, 1);
              file.writeFile('./tasks.json', tasks);
              return _context6.abrupt("return", deletedTask);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      });
    }
  }]);

  return TaskService;
}();

module.exports = new TaskService();