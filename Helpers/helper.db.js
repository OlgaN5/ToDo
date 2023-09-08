const mongoose = require('mongoose')

class HelperDb {
    async getConnection() {
        return await mongoose.connect('mongodb://127.0.0.1:27017/ToDo',{ useNewUrlParser: true,useUnifiedTopology: true })
    }
}

module.exports = new HelperDb()