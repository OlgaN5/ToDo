"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var TaskSchema = new Schema({
  id: String,
  title: String,
  isCompleted: Boolean,
  idUser: {
    type: String // ref: 'User'

  }
});
var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;