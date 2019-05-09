const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/SleepRepository');

describe('SleepRepository', function() {
  let sleepRepository;

  beforeEach(function() {
    sleepRepository = new SleepRepository('../data/sample-sleep.js');
  })

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  }); 

});