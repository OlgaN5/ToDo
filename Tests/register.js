const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')


chai.should()
chai.use(chaiHttp)

describe('API methods', () => {
    describe('post /api/register/', () => {
        it('it should register user', (done) => {
            const user = {
                login: 'testLogin',
                email: 'testEmail@gmail.com',
                password: 'testPassword'
            }
            chai.request(app)
                .post('/api/register/')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('login')
                    done()
                })
        })
        it('it should not register user', (done) => {
            chai.request(app)
            .post('/api/registers/')
            .end((err,res) => {
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