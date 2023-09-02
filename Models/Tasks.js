const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const TaskSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    isCompleted: Boolean,
    idUser: {
        ref: 'User'
    }
})
const Task = new mongoose.model('Task', TaskSchema)
module.exports = Task