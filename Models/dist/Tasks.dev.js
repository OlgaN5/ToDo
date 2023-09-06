"use strict";

// var {v4} = require('uuid');
var mongoose = require('mongoose');

var Schema = mongoose.Schema; // const uuid = require('mongoose-uuid2')
// require('mongoose-uuid2')(mongoose);
// const UUID = mongoose.Types.UUID

var TaskSchema = new Schema({
  id: String,
  title: String,
  isCompleted: Boolean,
  idUser: {
    type: String,
    ref: 'User'
  }
}); // TaskSchema.plugin(uuid.plugin, 'UUID');

var Task = mongoose.model('Task', TaskSchema);
module.exports = Task;