const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/HydrationRepository');
const hydrationDataSample = require('../data/hydration-sample');

describe('HydrationRepository', function() {
  let hydrationRepository;

  beforeEach(function() {
    hydrationRepository = new HydrationRepository(hydrationDataSample);
  })

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  }); 

})