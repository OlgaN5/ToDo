"use strict";

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

var sequelize = new Sequelize(process.env.DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});
module.exports = sequelize;