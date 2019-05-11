const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');
const userDataSample = require('../src/sample-users');
const activityDataSample = require('../data/activity-sample');

// const sampleUser =   {
//     "id": 1,
//     "name": "Nyasia Weber",
//     "address": "270 August Meadows, Maribelside SD 36129",
//     "email": "Jordane_Schultz@yahoo.com",
//     "strideLength": 4.7,
//     "dailyStepGoal": 8000
//   };

describe('Activity', function() {
  // let UserRepository;
  let activity;
  beforeEach(function() {  
    // UserRepository = new UserRepository(userDataSample);
    activity = new Activity(activityDataSample);
  })

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  }); 

  it('return the miles a user has walked based on their number of steps for a specific date', function() {
    expect(activity.userStepsToMilesInADay(1, `06/05/2019`)).to.equal(6.5586363636);  
  });

  // (stride 4.7 * numSteps 7368) / oneMileLength 5280

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