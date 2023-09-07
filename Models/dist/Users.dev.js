"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  // id: Schema.Types.ObjectId,
  login: String,
  email: String,
  password: String
});
var User = mongoose.model('User', UserSchema);
module.exports = User;