const mongoose = require('mongoose')

class HelperDb {
    async getConnection() {
        return await mongoose.connect('mongodb+srv://authumn0:evdSX8SY62LfnvME@cluster0.vpivwzy.mongodb.net/ToDo',{ useNewUrlParser: true,useUnifiedTopology: true })
    }
}

module.exports = new HelperDb()