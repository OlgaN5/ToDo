const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')
const db = require('../Utils/db')
const mongoose = require('mongoose')
const model = require('../Models/Users')
const helperDb = require('../Helpers/helper.db')
chai.should()
chai.use(chaiHttp)

async function getUserFromDatabase() {

    const connection = await helperDb.getConnection()
    const userInDb = await model.find({
        email: 'testEmail@gmail.com'
    })
    connection.disconnect()
    return userInDb
}

describe('API methods', () => {
    describe('post /api/register/', () => {
        const user = {
            login: 'testLogin',
            email: 'testEmail@gmail.com',
            password: 'testPassword'
        }

        it('it should register user', async () => {
            const userInDb = await getUserFromDatabase()
            console.log(userInDb, '222222222222222')
            chai.request(app)
                .post('/api/register/')
                .send(user)
                .end((err, res) => {
                    if (userInDb.length === 0) {
                        res.should.have.status(200)
                        res.body.should.be.a('object')
                        res.body.should.have.property('login')
                    } else {
                        res.should.have.status(200)
                        res.text.should.oneOf(['email is exist', 'login is exist']);
                        // res.body.should.have.property('login')
                    }
                    // done()
                })
        })
        it('it should not register user', (done) => {
            chai.request(app)
                .post('/api/registers/')
                .end((err, res) => {
                    res.should.have.status(404)
                })
            done()
        })
        it('it should not register user', (done) => {
            const invalidBody = {
                login: '',
                email: 'fff',
                password: 'dfff'
            }
            chai.request(app)
                .post('/api/register/')
                .send(invalidBody)
                .end((err, res) => {
                    res.body.should.be.a('object')
                    res.body.should.have.property('errors')
                    done()
                })
        })
    })
})