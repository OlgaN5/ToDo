"use strict";

var chai = require('chai');

var chaiHttp = require('chai-http');

var app = require('../index');

var db = require('../Utils/db');

var mongoose = require('mongoose');

var model = require('../Models/Users');

var helperDb = require('../Helpers/helper.db');

chai.should();
chai.use(chaiHttp);

function getUserFromDatabase() {
  var connection, userInDb;
  return regeneratorRuntime.async(function getUserFromDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(helperDb.getConnection());

        case 2:
          connection = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(model.find({
            email: 'testEmail@gmail.com'
          }));

        case 5:
          userInDb = _context.sent;
          connection.disconnect();
          return _context.abrupt("return", userInDb);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

describe('API methods', function () {
  describe('post /api/register/', function () {
    var user = {
      login: 'testLogin',
      email: 'testEmail@gmail.com',
      password: 'testPassword'
    };
    it('it should register user', function _callee() {
      var userInDb;
      return regeneratorRuntime.async(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(getUserFromDatabase());

            case 2:
              userInDb = _context2.sent;
              console.log(userInDb, '222222222222222');
              chai.request(app).post('/api/register/').send(user).end(function (err, res) {
                if (userInDb.length === 0) {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('login');
                } else {
                  res.should.have.status(200);
                  res.text.should.oneOf(['email is exist', 'login is exist']); // res.body.should.have.property('login')
                } // done()

              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    });
    it('it should not register user', function (done) {
      chai.request(app).post('/api/registers/').end(function (err, res) {
        res.should.have.status(404);
      });
      done();
    });
    it('it should not register user', function (done) {
      var invalidBody = {
        login: '',
        email: 'fff',
        password: 'dfff'
      };
      chai.request(app).post('/api/register/').send(invalidBody).end(function (err, res) {
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        done();
      });
    });
  });
});