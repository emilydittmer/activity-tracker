class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  } 

// For a user (identified by their userID), the average number of hours slept per day
  returnAverageSleep(userID) {

    function userHours() {
      let oneUserHours = user(1);
      oneUserHours = oneUserHours.sleepData;
      return oneUserHours.map((day) => {
        return day.hoursSlept;
      });
      return oneUserHours;
    }
    
    function averageHours() {
      let allUserHours = userHours();
      return allUserHours.reduce((acc, hour) => {
        return acc += hour/allUserHours.length
      }, 0);
    }
    
    averageHours();

  }
// For a user, their average sleep quality per day over all time
// For a user, how many hours they slept for a specific day (identified by a date)
// For a user, their sleep quality for a specific day (identified by a date)
// For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
// For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

}
if (typeof module !== 'undefined') {
  module.exports = Sleep;
}