const jwt = require('jsonwebtoken')
const app = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const dbHelper = require('../Helpers/helper.db')
const model = require('../Models/Tasks')
const mongoose = require('mongoose')
chai.should()
chai.use(chaiHttp)

const authHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyOTY0MzViLTIwMDQtNDJmOS04MWMzLTZhMjQwODdmZGEyMiIsImlhdCI6MTY5MzczOTYyNn0.Kna1nwzUOcHkXDUDYut3EP1v3m9oi3xeiMWktuJjLjM'
const token = authHeader?.split(' ')[1]
async function getTasksUser() {
    let connection
    try {
       
        let idUser = null
        jwt.verify(token, process.env.SECRET_KEY, (err, id) => {
            if (err) throw new Error('token is invalid')            
            idUser = id.id
        })
        connection = await dbHelper.getConnection()
        const tasks = await model.find({
            idUser
        })
        console.log('11')
        return tasks.filter(item => item.idUser === idUser)
    } catch (e) {
        console.log(e)
    } finally {
        connection.disconnect()
    }

}
describe('test API methods task', () => {
    describe('it get all tasks of user', () => {
        try {
            it('it returns tasks of user', async () => {
                const tasksUser = await getTasksUser()
                chai.request(app)
                    .get('/api/task/')
                    .set('authorization', authHeader)
                    .end((err, res) => {
                        if (tasksUser.length !== 0) {
                            res.should.have.status(200)
                            res.body.should.have.property('title')
                        } else {
                            res.should.have.status(200)
                            res.body.should.have.property('message').equal("user hasn't tasks")
                        }
                       
                    })
            })
            it('it not returns tasks of user 2', (done) => {
                chai.request(app)
                    .get('/api/task/')
                    .set('authorization', 'Bearer invalid')
                    .end((err, res) => {
                        console.log(res.body)
                        res.body.should.have.property('message').equal('token is invalid')
                        res.should.have.status(403)
                        done()
                    })
            })
            it('it not returns tasks of user', (done) => {
                chai.request(app)
                    .get('/api/task/')
                    .end((err, res) => {
                        res.should.have.status(401)
                        res.body.should.have.property('message').equal('нужен токен')
                        done()
                    })
            })
        } catch (e) {
            console.log(e)
        }
    })
    // describe('it add task of user', async () => {
    //     it('it should add task and returns added task', (done) => {

    //     })
    // })

})