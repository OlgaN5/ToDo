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
        .end((err,res) => {
            res.should.have.status(200)
            console.log(err)
            // expect(typeof res.body).to.equal('string')
            // res.text.should.be.a('string')
            done()            
        })
    })
})