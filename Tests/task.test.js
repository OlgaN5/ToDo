const app = require('../index')
const chai = require('chai')
const chaiHttp = require('chai-http')

chai.should()
chai.use(chaiHttp)


describe('test API methods task', () => {
    describe('it get all tasks of user', () => {
        it('it returns tasks of user', (done) => {
            chai.request(app)
                .get('/api/task/')
                .set('authorization','Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMyNzM4NDQ4LTM0ZGItNDlkYy05YWI2LWI3ZDM2YTk3NmM5MSIsImlhdCI6MTY5Mjc3OTAxMn0.m7rxmFnLf7qArny87Pwam9zgB0Sdi_hL_dolo5WhqCY')
                .end((err,res) => {
                    res.should.have.status(200)
                    console.log(res.body)
                    res.body.should.have.property('title')
                   
                    done()
                })
        })
        // it('it not returns tasks of user', (done) => {

        // })
    })
    // describe('it add task of user', () => {
    //     it('it should add task and returns added task', (done) => {

    //     })
    // })
})