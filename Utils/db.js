const {
    MongoClient
} = require('mongodb')
const mongoDbClient = new MongoClient('mongodb://127.0.0.1:27017')

class Db {
    async read(path) {
        //path 'task', 'user'
        try {
            const connection = await mongoDbClient.connect()
            console.log('1111111111')
            const data = await mongoDbClient.db('ToDo').collection(path).find().toArray()
            console.log('222222222222')
            connection.close()
            console.log(data)
        } catch (e) {
            console.log(e.message)
        }
        return data
    }
    async create(path, data) {
        await mongoDbClient.connect()
        console.log('2222222')
        mongoDbClient.db('ToDo').collection(path).insertOne(data)
        mongoDbClient.close()
    }
    // async writeFile(path, data) {

    //     fs.writeFileSync(path, JSON.stringify(data))
    // }
    async update(collection, id, parameter, parameterValue) {
        await mongoDbClient.connect()
        const updateResult = mongoDbClient.db('ToDo').collection(collection).updateOne({
            id: id
        }, {
            $set: {
                [parameter]: parameterValue
            }
        })
        mongoDbClient.close()
        return updateResult
    }
    async delete(path, id) {
        await mongoDbClient.connect()
        const deletedResult = mongoDbClient.db('ToDo').collection(path).deleteOne({
            id: id
        })
        mongoDbClient.close()
        return deletedResult
    }
}
module.exports = new Db()