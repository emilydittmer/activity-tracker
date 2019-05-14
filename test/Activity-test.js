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

  it('should return the number of steps for a specific user in a day', function() {
    expect(activity.returnUserStepsInADay(1, '06/05/2019')).to.equal(7368);  
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

  it('should return a week of number of steps for a specific user', function(){
    expect(activity.returnAWeekStepCount(1, "12/05/2019")).to.eql([7368, 3079, 2387, 6326, 13644, 4337, 9068]);
  });

  it('should return the total number of steps for a specific user in a week', function(){
    expect(activity.returnAWeekTotalSteps(1, "12/05/2019")).to.equal(46209);
  });
  

  it('should return a week of flights of stairs for a specific user', function(){
    expect(activity.returnAWeekFlightOfStairs(1, "12/05/2019")).to.eql([46, 4, 4, 26, 13, 15, 3]);
  });

  it('should return a week of active minutes for a specific user', function(){
    expect(activity.returnAWeekMinutesActive(1, "12/05/2019")).to.eql([204, 115, 179, 126, 220, 294, 97]);
  });

  it('should return a week of miles walked for a specific user', function(){
    expect(activity.returnAWeekMilesWalked(1, "12/05/2019")).to.eql([6, 2, 2, 5, 12, 3, 8]);
  });

  it('should return the number of steps for a specific user in a day', function() {
    expect(activity.returnUserStepsInADay(1, '06/05/2019')).to.equal(7368);  
  });

  it('should return the flights of stairs for a specific user in a day', function() {
    expect(activity.returnUserFlightsOfStairsInADay(1, '06/05/2019')).to.equal(46);  
  });

});