
const mongoose = require('mongoose')
const Task = require('../Models//Tasks')
const User = require('../Models/Users')
const helperDb = require('../Helpers/helper.db')
class Db {
    async read(model) {
        //path 'tasks', 'users'
        let connection
        try {
            connection = await helperDb.getConnection()
            const data = await model.find({})
            // console.log(await model.find({}).populate('idUser'))
            return data
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.disconnect()
        }
    }
    async create(model, data) {
        let connection
        try {
            connection = await helperDb.getConnection()
             const result = await model.create(data)
             console.log(result)
             return result
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.disconnect()
        }
    }

    async update(model, id, parameter, parameterValue) {
        let connection
        try {
            connection = await helperDb.getConnection()
            const updateResult = await model.updateOne({
                _id: new mongoose.Types.ObjectId(id)
            }, {
                [parameter]: parameterValue
            })
            return updateResult
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.disconnect()
        }
    }
    async delete(model, id) {
        let connection
        try {
            connection = await helperDb.getConnection()
            const deletedResult = await model.deleteOne({
                _id: new mongoose.Types.ObjectId(id)
            })
            return deletedResult
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.disconnect()
        }
    }
}
module.exports = new Db()