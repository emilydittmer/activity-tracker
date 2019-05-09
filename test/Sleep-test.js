const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');

const sampleSleep = {
  "userID": 1,
  "sleepData": [
    {
      "date": "06/05/2019",
      "hoursSlept": 8,
      "sleepQuality": 4.8
    },
    {
      "date": "07/05/2019",
      "hoursSlept": 10.7,
      "sleepQuality": 4.8
    },
    {
      "date": "08/05/2019",
      "hoursSlept": 8.1,
      "sleepQuality": 1.9
    }
  ]
}

describe('Sleep', function() {
  let sleep;

  beforeEach(function() {
    sleep = new Sleep(sampleSleep);
  })

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  }); 

});