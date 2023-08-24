const app = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.should()
chai.use(chaiHttp)
const expect = chai.expect
describe('post /api/login/', () => {
    it('it should login user', (done) => {
        const user = {
            login: 'testLogin',
            password: 'testPassword'
        }
        chai.request(app)
            .post('/api/login/')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.have.property('token')
                done()
            })
    })
    it('it should not login user', () => {
        const user = {
            login: 'testLogin',
            password: 'testPassword'
        }
        chai.request(app)
            .post('/api/logins/')
            .send(user)
            .end((err, res) => {
                res.should.have.status(404)
            })
    })
    it('it should not login user', () => {
        const user = {
            login: '',
            password: 'testPassword'
        }
        chai.request(app)
            .post('/api/login/')
            .send(user)
            .end((err, res) => {
                res.body.should.have.property('errors')
            })
    })
    it('it should not login user', () => {
        const user = {
            login: 'hh',
            password: 'testPassword'
        }
        chai.request(app)
            .post('/api/login/')
            .send(user)
            .end((err, res) => {
                res.text.should.include('token not received')
            })
    })
})