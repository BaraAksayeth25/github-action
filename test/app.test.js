const request = require('supertest');
const { expect } = require('chai');
const { greeting } = require('../user');
const app = require('../server');

describe('Test API', () => {
  it('Middleware Greeting ', () => {
    const result = greeting('bara');
    expect(result).to.be.eq('Hello bara, Welcome to My Job');
  });

  it('Request user', async () => {
    const response = await request(app).get('/user/dadang');
    expect(response.body.message).to.be.eq('Hello dadang, Welcome to My Job');
  });
});
