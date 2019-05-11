class SleepRepository {
  constructor(dataFilepath) {
    this.dataFilepath = dataFilepath;
  }

  averageSleepQualityAllUsers() {
    let allSleepUsers = this.dataFilepath.reduce((allUsers, eachUser) => {
      return allUsers.concat(eachUser)
    }, []);
    let userSleepData = allSleepUsers.map(user => user.sleepData);
    let allData = userSleepData.reduce((allData, eachUser) => {
      return allData.concat(eachUser)
    }, []);
    let allSleepQuality = allData.reduce((allSleepQuality, user) => {
      allSleepQuality += user.sleepQuality;
      return allSleepQuality;
    }, 0); 
    return allSleepQuality/allData.length;
  }
  // For all users, the average sleep quality
  // Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  // For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)
  // Make a metric of your own! Document it, calculate it, and display it.
}

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}