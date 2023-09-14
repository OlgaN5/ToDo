"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Sequelize = require('sequelize');

var db = require('../config/database');

var User = db.define('User', {
  id: {
    type: Sequelize.STRING,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  login: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.BOOLEAN,
    unique: false,
    allowNull: false
  }
});
var _default = User; // const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const UserSchema = new Schema({
//     login: String,
//     email: String,
//     password: String
// })
// const User = mongoose.model('User', UserSchema)
// module.exports = User

exports["default"] = _default;