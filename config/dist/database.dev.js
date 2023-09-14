"use strict";

// require('dotenv').config()
var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

var sequelize = new Sequelize(process.env.DATABASE, process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});
console.log(process.env.DATABASE, process.env.DBPASSWORD);
module.exports = sequelize;