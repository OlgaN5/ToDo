"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = require('../Models/Users');

var TaskSchema = new Schema({
  // id: mongoose.Schema.Types.ObjectId,
  title: String,
  isCompleted: Boolean,
  idUser: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});
var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;