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

  returnWeekSleepQualityAllUsers(date) {
    let allData = this.dataFilepath.filter(allUsers => {
      let spreadedAllData = Object.entries(allUsers);
      let allUserSleepData = spreadedAllData[1][1];
      let sevenDays = allUserSleepData.splice((allUserSleepData.findIndex(day => day.date === date) - 6), 7).reduce((total, dailySleep) => total += dailySleep.sleepQuality, 0)/7;
      if (sevenDays > 3) {
        return allUsers
      }
    })
    return allData.map(user => user.userID);
  }

  returnLongestDailySleeper(date) {

  }
}  
  // For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)
  // Make a metric of your own! Document it, calculate it, and display it.

if (typeof module !== 'undefined') {
  module.exports = SleepRepository;
}