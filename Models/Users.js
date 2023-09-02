const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    id: mongoose.Schema.Types.ObjectId,
    login: String,
    email: String,
    password: String
})
const User = new Schema('User', UserSchema)
module.exports = User