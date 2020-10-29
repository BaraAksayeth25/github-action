const request = require('supertest');
const { expect } = require('chai');
const { greeting } = require('../user');
const app = require('../index');

describe('Test API', () => {
  it('Middleware Greeting ', () => {
    const result = greeting('bara');
    expect(result).to.be.eq('Hello Bara, Welcome to My Job');
  });

  it('Request user', (done) => {
    request(app)
      .get('/user/dadang')
      .expect('Hello Dadang, Welcome to My Job', done);
  });
});
