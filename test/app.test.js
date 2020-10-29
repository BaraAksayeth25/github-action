const { expect } = require('chai');
const { greeting } = require('../user');

describe('Test Middleware', () => {
  it('Greeting ', () => {
    const result = greeting('bara');
    expect(result).to.be.eq('Hello wahyu dan dika, Welcome to My Job');
  });
});
