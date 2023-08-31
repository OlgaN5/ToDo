// const {
//     MongoClient
// } = require('mongodb')
// const mongoDbClient = new MongoClient('mongodb://127.0.0.1:27017')

const helperDb = require('../Helpers/helper.db')
// const helper = require('../Helpers/helper')
class Db {
    async read(path) {
        //path 'task', 'user'
        let connection
        try {
            connection = await helperDb.getConnection()
            const db = await helperDb.useDefaultDb(connection)
            const data = await db.collection(path).find().toArray()
            console.log(data)
            return data
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.close()
        }
    }
    async create(path, data) {
        let connection
        try {
            connection = await helperDb.getConnection()
            const db = await helperDb.useDefaultDb(connection)
            await db.collection(path).insertOne(data)
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.close()
        }
    }
    // async writeFile(path, data) {

    //     fs.writeFileSync(path, JSON.stringify(data))
    // }
    async update(collection, id, parameter, parameterValue) {
        let connection
        try {
            connection = await helperDb.getConnection()
            const db = await helperDb.useDefaultDb(connection)
            const updateResult = await db.collection(collection).updateOne({
                id: id
            }, {
                $set: {
                    [parameter]: parameterValue
                }
            })
            return updateResult
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.close()
        }
    }
    async delete(path, id) {
        let connection
        try {
            connection = await helperDb.getConnection()
            const db = await helperDb.useDefaultDb(connection)
            const deletedResult = await db.collection(path).deleteOne({
                id: id
            })
            return deletedResult
        } catch (e) {
            console.log(e.message)
        } finally {
            connection.close()
        }
    }
}
module.exports = new Db()