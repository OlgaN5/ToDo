"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema();
var TaskSchema = new Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  isCompleted: Boolean,
  idUser: {
    ref: 'User'
  }
});
var Task = new mongoose.model('Task', TaskSchema);
module.exports = Task;