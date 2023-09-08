"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  login: String,
  email: String,
  password: String
});
var User = mongoose.model('User', UserSchema);
module.exports = User;