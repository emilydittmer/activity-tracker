const chai = require('chai');
const expect = chai.expect;
const ActivityRepository = require('../src/ActivityRepository');
const User = require('../src/User');
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

  // it('return the miles a user has walked based on their number of steps', function() {
  //   expect(hydration.returnWaterIntakeByDate(1, `06/05/2019`)).to.equal(64);  
  // });

  // it('should keep track of how many minutes a user was active for a given day', function() {
  //   expect(hydration.returnAverageWaterIntake(2)).to.equal(67.71428571428571);  
  // });

  // it('should keep track of how many minutes active did a user average for a given week, function() {
  //   expect(hydration.returnAWeekWaterIntake(1, "12/05/2019")).to.eql([64, 80, 39, 40, 65, 84, 33]);  
  // });

  // it('should return wether a user did they reach their step goal for a given day, function() {
  //   expect(hydration.returnAWeekWaterIntake(1, "12/05/2019")).to.eql([64, 80, 39, 40, 65, 84, 33]);  
  // });

  // it('should find all the days where the user exceeded their step goal, function() {
  //   expect(hydration.returnAWeekWaterIntake(1, "12/05/2019")).to.eql([64, 80, 39, 40, 65, 84, 33]);  
  // });

  // it('should find the all-time stair climbing record for a user, function() {
  //   expect(hydration.returnAWeekWaterIntake(1, "12/05/2019")).to.eql([64, 80, 39, 40, 65, 84, 33]);  
  // });

  // it('should find the all-time stair climbing record for a user, function() {
  //   expect(hydration.returnAWeekWaterIntake(1, "12/05/2019")).to.eql([64, 80, 39, 40, 65, 84, 33]);  
  // });


  

});