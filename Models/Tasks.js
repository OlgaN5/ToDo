const Sequelize = require('sequelize')
const db = require('../config/database')


const Task = db.define('Task', {
    id: {
        type: Sequelize.STRING,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false
    },
    isCompleted: {
        type: Sequelize.BOOLEAN,
        unique: false,
        allowNull: false
    },
    idUser: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    }
})




// const mongoose = require('mongoose')
// const Schema = mongoose.Schema
// const TaskSchema = new Schema({
//     title: String,
//     isCompleted: Boolean,
//     idUser: {
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     }
// })
// const Task = mongoose.model('Task', TaskSchema)
module.exports = Task