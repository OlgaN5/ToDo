const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    id: String,
    title: String,
    isCompleted: Boolean,
    idUser: {
        type: String,
        // ref: 'User'
    }
})
const Task = mongoose.model('Task', TaskSchema)
module.exports = Task