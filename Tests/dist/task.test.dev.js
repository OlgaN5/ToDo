"use strict";

var jwt = require('jsonwebtoken');

var app = require('../index');

var chai = require('chai');

var chaiHttp = require('chai-http');

var file = require('../Utils/fs');

chai.should();
chai.use(chaiHttp);

var authenticateToken = require('../Utils/Authenticate');

describe('test API methods task', function () {
  describe('it get all tasks of user', function _callee() {
    var tasks, token, idUser, tasksUser;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(file.readFile('./tasks.json'));

          case 3:
            tasks = _context.sent;
            token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMyNzM4NDQ4LTM0ZGItNDlkYy05YWI2LWI3ZDM2YTk3NmM5MSIsImlhdCI6MTY5Mjk2ODMwNX0.ydDGlLWFb9H1HsP5D73A7d5zKGLSY24e2lLQ9pmUXgw';
            idUser = null;
            jwt.verify(token, process.env.SECRET_KEY, function (err, id) {
              if (err) throw new Error('token is invalid');
              idUser = id;
            });
            tasksUser = tasks.filter(function (item) {
              return item.idUser === idUser;
            });
            console.log(tasksUser);
            it('it returns tasks of user', function (done) {
              chai.request(app).get('/api/task/').set('authorization', token).end(function (err, res) {
                if (tasksUser.length !== 0) {
                  res.should.have.status(200);
                  res.body.should.have.property('title');
                } else {
                  res.should.have.status(200);
                  res.text.should.be.a("user hasn't tasks");
                }

                done();
              });
            });
            it('it not returns tasks of user', function (done) {
              chai.request(app).get('/api/task/').set('authorization', 'Bearer eyJhyNzM4NDQ4LTM0ZGItNDlkYy05YWI2LWI3ZDM2YTk3NmM5MSIsImlhdCI6MTY5Mjc3OTAxMn0.m7rxmFnLf7qArny87Pwam9zgB0Sdi_hL_dolo5WhqCY').end(function (err, res) {
                res.should.have.status(403);
                done();
              });
            });
            it('it not returns tasks of user', function (done) {
              chai.request(app).get('/api/task/').end(function (err, res) {
                res.should.have.status(401);
                done();
              });
            });
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 14]]);
  }); // describe('it add task of user', () => {
  //     it('it should add task and returns added task', (done) => {
  //     })
  // })
});