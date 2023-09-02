"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  login: String,
  email: String,
  password: String
});
var User = new Schema('User', UserSchema);
module.exports = User;