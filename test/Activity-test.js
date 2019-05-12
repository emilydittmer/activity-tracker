const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');
const userDataSample = require('../src/sample-users');
const activityDataSample = require('../data/activity-sample');

describe('Activity', function() {
  let activity;

  beforeEach(function() {  
    activity = new Activity(activityDataSample, userDataSample);
  })

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  }); 

  it('should return the miles a user has walked based on their number of steps for a specific date', function() {
    expect(activity.userStepsToMilesInADay(1, '06/05/2019', 4.7)).to.equal(6);  
  });

  it('should return the kilometers a user has walked based on their number of steps for a specific date', function() {
    expect(activity.userStepsToKilometersInADay(1, '06/05/2019', 4.7)).to.equal(9);  
  });

  it('should keep track of how many minutes a user was active for a given day', function() {
    expect(activity.returnUserMinutesActiveInGivenDay(1, '12/05/2019')).to.equal(97);  
  });

  it('should keep track of how many minutes active a user averaged for a given week', function() {
    expect(activity.returnAWeekMinutesActiveAverage(1, "12/05/2019")).to.equal(176);  
  });

  it('should return wether a user did they reach their step goal for a given day', function() {
    expect(activity.returnCheckGoalReachedInGivenDay(1, "12/05/2019")).to.equal(true);  
  });

  it('should find all the days where the user exceeded their step goal', function() {
    expect(activity.returnDaysExceededStepGoal(1)).to.eql(["10/05/2019", "12/05/2019"]);  
  });

  it('should return the all-time stair climbing record for a user', function() {
    expect(activity.returnAllTimeClimbingRecord(1)).to.equal(46);  
  });

});