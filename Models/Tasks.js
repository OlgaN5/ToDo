// var {v4} = require('uuid');
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const uuid = require('mongoose-uuid2')
// require('mongoose-uuid2')(mongoose);
// const UUID = mongoose.Types.UUID

const TaskSchema = new Schema({
    id: String,
    title: String,
    isCompleted: Boolean,
    idUser: {
        type: String,
        ref: 'User'
    }
})
// TaskSchema.plugin(uuid.plugin, 'UUID');
const Task = mongoose.model('Task', TaskSchema)
module.exports = Task