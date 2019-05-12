const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/ActivityRepository');
const UserRepository = require('../src/UserRepository');
const activityDataSample = require('../data/activity-sample');
const userDataSample = require('../src/sample-users');

describe('ActivityRepository', function() {
  let activityRepository;
  beforeEach(function() {  
    activityRepository = new ActivityRepository(activityDataSample,userDataSample);
  })

  it('should be a function', function() {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of ActivityRepository', function() {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  }); 

  it('should return  the average number of stairs climbed for a specified date for all users', function() {
    expect(activityRepository.returnAverageStairsClimbedInADayForAllUsers("12/05/2019")).to.equal(16.5);  
  });

  it('return the average number of steps by all users for a specific date', function() {
    expect(activityRepository.returnAverageStepsInADayForAllUsers(`12/05/2019`)).to.equal(9294.5);  
  });

  it('return the average minutes active by all users for a specific date', function() {
    expect(activityRepository.returnAverageMinsActiveInADayForAllUsers(`12/05/2019`)).to.equal(168.5);  
  });

});