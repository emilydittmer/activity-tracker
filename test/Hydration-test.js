const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');
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

  it('should keep track of the water intake of a user for a specific date', function() {
    expect(hydration.returnWaterIntakeByDate(1, "06/05/2019")).to.equal(64);  
  });

  it('should keep track of the average water intake of a user', function() {
    expect(hydration.returnAverageWaterIntake(2)).to.equal(71);  
  });

});