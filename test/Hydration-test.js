const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const User = require('../src/User');
const hydrationDataSample = require('../data/hydration-sample')


describe('Hydration', function() {
  let hydration;
  beforeEach(function() {  
    hydration = new Hydration(hydrationDataSample);
  })

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  }); 

  it('should keep track of the daily water intake of a user', function() {
    expect(hydration.returnDailyWaterIntake("06/05/2019")).to.equal(64);  
  });


});