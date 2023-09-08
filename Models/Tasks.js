const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('../Models/Users')
const TaskSchema = new Schema({
    title: String,
    isCompleted: Boolean,
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
const Task = mongoose.model('Task', TaskSchema)
module.exports = Task