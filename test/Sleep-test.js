const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const sleepDataSample = require('../data/sample-sleep');

describe('Sleep', function() {
  let sleep;

  beforeEach(function() {
    sleep = new Sleep(sleepDataSample);
  })

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  }); 

  it('should return the average number of hours slept for a user', function() {
    expect(sleep.returnAverageSleep(1)).to.equal(8.242857142857144)
  });

  it('should return the average sleep quality for a user', function() {
    expect(sleep.returnAverageSleepQuality(1)).to.equal(3.4857142857142853);
  });

  it('should return the total hours slept for a user for a specific day', function() {
    expect(sleep.returnTotalSleepHoursInSpecificDay(1, "12/05/2019")).to.equal(10.1);
  });

  it('should return the quality of sleep for a user for a specific day', function() {
    expect(sleep.returnTotalSleepQualityInSpecificDay(1, "12/05/2019")).to.equal(1.7);
  });

  it('should return the number of hours slept each day for a given week for a user', function() {
    expect(sleep.returnAWeekSleepCount(1, "12/05/2019")).to.eql([8, 10.7, 8.1, 4.5, 10.7, 5.6, 10.1]);
  });

  it('should return the number of hours slept each day for a given week for a user', function() {
    expect(sleep.returnAWeekSleepQualityCount(1, "12/05/2019")).to.eql([4.8, 4.8, 1.9, 3.4, 4.3, 3.5, 1.7]);
  });

});