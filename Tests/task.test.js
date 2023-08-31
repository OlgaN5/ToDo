const jwt = require('jsonwebtoken')
const app = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const file = require('../Utils/db')
chai.should()
chai.use(chaiHttp)
const authenticateToken = require('../Utils/Authenticate')

describe('test API methods task', () => {
    describe('it get all tasks of user', async () => {
        try {
            const tasks = await file.readFile('./tasks.json')
            const authHeader = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMyNzM4NDQ4LTM0ZGItNDlkYy05YWI2LWI3ZDM2YTk3NmM5MSIsImlhdCI6MTY5Mjk2ODMwNX0.ydDGlLWFb9H1HsP5D73A7d5zKGLSY24e2lLQ9pmUXgw'
            const token = authHeader?.split(' ')[1]
            let idUser = null
            jwt.verify(token, process.env.SECRET_KEY, (err, id) => {
                if (err) throw new Error('token is invalid')
                idUser = id
            })           
            const tasksUser = tasks.filter(item => item.idUser === idUser)
            it('it returns tasks of user', (done) => {

                chai.request(app)
                    .get('/api/task/')
                    .set('authorization', token)
                    .end((err, res) => {
                        if (tasksUser.length !== 0) {
                            res.should.have.status(200)
                            res.body.should.have.property('title')
                        } else {
                            res.should.have.status(401)
                            res.body.should.have.property('message').equal('нужен токен')
                        }
                        done()
                    })
            })
            it('it not returns tasks of user', (done) => {
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