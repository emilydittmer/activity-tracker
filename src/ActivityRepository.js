class ActivityRepository {
  constructor (dataFilepath, userData) {
    this.dataFilepath = dataFilepath;
    this.userData = userData;
  }
  
  // For all users, what is the average number of:
  // - stairs climbed for a specified date

  // - steps taken for a specific date

  // - minutes active for a specific date

  // - Make a metric of your own! Document it, calculate it, and display it.

}


if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}