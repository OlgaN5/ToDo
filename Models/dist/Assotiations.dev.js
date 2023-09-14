"use strict";

var Task = require('../models/Tasks');

var User = require('../models/Users');

User.hasMany(Task, {
  foreignKey: 'idUser'
});
Task.belongsTo(User, {
  foreignKey: 'idUser'
});