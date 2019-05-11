const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/SleepRepository');
const sleepDataSample = require('../data/sample-sleep')

describe('SleepRepository', function() {
  let sleepRepository;

  beforeEach(function() {
    sleepRepository = new SleepRepository(sleepDataSample);
  })

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  }); 

  it('should return the average sleep quality for all users', function(){
    expect(sleepRepository.averageSleepQualityAllUsers()).to.equal(3.357142857142857);
  });

  it('should return the average sleep quality for all users in a given week', function(){
    expect(sleepRepository.returnWeekSleepQualityAllUsers("12/05/2019")).to.eql([1, 2]);
  });

  it('should return the user who slept most in a given day', function() {
    expect(sleepRepository.returnLongestDailySleeper("12/05/2019")).to.eql([]);
  })

});