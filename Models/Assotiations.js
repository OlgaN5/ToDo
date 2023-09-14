const Task = require('../models/Tasks')
const User = require('../models/Users')

User.hasMany(Task, {
    foreignKey: 'idUser'
})
Task.belongsTo(User, {
    foreignKey: 'idUser'
})