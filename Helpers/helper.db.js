const {
    MongoClient
} = require('mongodb')
const mongoDbClient = new MongoClient('mongodb://127.0.0.1:27017')

class HelperDb {
    async getConnection() {
        return await mongoDbClient.connect()
    }
    async useDefaultDb(connection) {
       return await connection.db('ToDo')
    }
}

module.exports = new HelperDb()