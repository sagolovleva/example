'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);
const url = 'http://www.mocky.io/v2/5e9602272f0000740002577c';
describe('Should retrieve information: ', () => {
    it('GET mocky data for name', (done) => {
        chai.request(url)
            .get('')
            .end((err, res) => {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});
