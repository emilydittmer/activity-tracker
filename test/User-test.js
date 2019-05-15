const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');

const sampleUser = {
  "id": 5,
  "name": "Grady Wolff",
  "address": "45657 Lindgren Ramp, New Marysechester MT 41312",
  "email": "Isadore42@gmail.com",
  "strideLength": 5.5,
  "dailyStepGoal": 11000
}

describe('User', function() {
  let user;

  beforeEach(function() {
    user = new User(sampleUser);
  })

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', function() {
    expect(user).to.be.an.instanceof(User);
  }); 

  it('should return the first name of the user', function() {
    expect(user.returnFirstName()).to.equal("Grady");
  });


});