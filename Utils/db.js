// const {
//     MongoClient
// } = require('mongodb')
// const mongoDbClient = new MongoClient('mongodb://127.0.0.1:27017')
const mongoose = require('mongoose')
const Task = require('../Models//Tasks')
const User = require('../Models/Users')
const helperDb = require('../Helpers/helper.db')
// const helper = require('../Helpers/helper')
class Db {
    async read(path) {
        //path 'tasks', 'users'
        let connection
        try {
            let model
            switch (path) {
                case 'tasks':
                    model = Task
                    break

                case 'users':
                    // console.log("2222")
                    model = User
                    break
            }
            connection = await helperDb.getConnection()
            const data = await model.find({})
            console.log(await model.find({}).populate('idUser'))
            return data
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.disconnect()
        }
    }
    async create(path, data) {
        let connection
        try {
            let model
            switch (path) {
                case 'tasks':
                    model = Task
                    break

                case 'users':
                    model = User
                    break
            }
            connection = await helperDb.getConnection()
             const result = await model.create(data)
             console.log(result)
             return result
            //  data
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.disconnect()
        }
    }
    // async writeFile(path, data) {

    //     fs.writeFileSync(path, JSON.stringify(data))
    // }
    async update(collection, id, parameter, parameterValue) {
        let connection
        try {
            let model
            switch (collection) {
                case 'tasks':
                    model = Task
                    break

                case 'users':
                    model = User
                    break
            }
            connection = await helperDb.getConnection()
            const updateResult = await model.updateOne({
                _id: new mongoose.Types.ObjectId(id)
            }, {
                [parameter]: parameterValue
            })
            console.log(updateResult)
            return updateResult
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.disconnect()
        }
    }
    async delete(path, id) {
        let connection
        try {
            let model
            switch (path) {
                case 'tasks':
                    model = Task
                    break

                case 'users':
                    model = User
                    break
            }
            connection = await helperDb.getConnection()
            // const db = await helperDb.useDefaultDb(connection)
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