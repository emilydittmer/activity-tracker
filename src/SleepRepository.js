class SleepRepository {
  constructor(dataFilepath) {
    this.dataFilepath = dataFilepath;
  }

}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}