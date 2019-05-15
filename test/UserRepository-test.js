const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const userDataSample = require('../src/sample-users');

describe('UserRepository', function() {
  let userRepository;

  beforeEach(function() {
    userRepository = new UserRepository(userDataSample);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });  

  it('should return the data of a user based on the id of the user', function() { 
    expect(userRepository.returnUserData(2)).to.eql({
      "id": 2,
      "name": "Shayne Swift",
      "address": "747 Dickinson Gardens, South Helga AR 88484-2240",
      "email": "Lawson74@yahoo.com",
      "strideLength": 4.5,
      "dailyStepGoal": 11000
    });
  });  

  it('should return the average step goal for all users', function() {
    expect(userRepository.returnAverageStepGoal()).to.equal(8833.333333333332);
  });

  it('should return the average stride length for all users', function() {
    expect(userRepository.returnAverageStrideLength()).to.equal(5);
  });

  it('should return the addresses of all users', function() {
    expect(userRepository.returnAllUsersAddresses()).to.eql([
      '270 August Meadows, Maribelside SD 36129', 
      '747 Dickinson Gardens, South Helga AR 88484-2240', 
      '744 Josephine Parkway, Hellerside OH 17625',
      '73488 Cole Ways, Jakubowskimouth AK 48498',
      '45657 Lindgren Ramp, New Marysechester MT 41312', 
      '8350 Bailee Motorway, South Pascale AR 08695-4819']);
  });

  it('should store all the home states of the users', function() {
    expect(userRepository.returnAllStates()).to.eql(["SD", "AR", "OH", "AK", "MT", "AR"]);
  });

  it('should store the most common home state of the users', function() {
    expect(userRepository.returnMostFrequentState()).to.equal("AR");
  });

});
  


