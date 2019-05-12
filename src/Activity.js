class Activity {
  constructor (activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  returnUserStepsInADay(userID, date) {
    let specificUser = this.activityData[userID-1].activityData;
    return specificUser.find(el => el.date === date).numSteps;
  }

  userStepsToMilesInADay(userID, date, strideLength) {
    let dailyStep = this.activityData[userID-1].activityData;
    let stepByDay = dailyStep.find(el => el.date === date).numSteps
    let userStrideLength = this.userData.find(el => el.id === userID).strideLength
    let totalStepDistanceInMiles = userStrideLength * stepByDay / 5280;
    return Math.floor(totalStepDistanceInMiles);
  }

  userStepsToKilometersInADay(userID, date, strideLength) {
    return Math.floor(this.userStepsToMilesInADay(userID, date, strideLength) * 1.609344);
  }

  returnUserMinutesActiveInGivenDay(userID, date) {
    let dailyMinutes = this.activityData[userID-1].activityData;
    let userMinutesActiveInADay = dailyMinutes.find(el => el.date === date).minutesActive;
    return userMinutesActiveInADay;
  }

  returnAWeekMinutesActiveAverage(userID, date) {
    let dateIndex = this.activityData[userID-1].activityData.findIndex(day => (JSON.stringify(day.date)) === JSON.stringify(date));
    let dateBack = dateIndex - 6;
    let weekActivityMinutes = this.activityData[userID-1].activityData.slice(dateBack, (dateIndex+1)).map(day => day.minutesActive);
    let averageMinutes = weekActivityMinutes.reduce((total, daily) => {
      return total += daily;
    }, 0)/7
    return Math.floor(averageMinutes);
  }
  
  returnCheckGoalReachedInGivenDay(userID, date) {
    let dailySteps = this.activityData[userID-1].activityData;
    let userStepsInADay = dailySteps.find(el => el.date === date).numSteps;
    let userStepGoalInADay = this.userData.find(user => user.id === userID).dailyStepGoal;
    return userStepGoalInADay >= userStepGoalInADay ? true : false;
  }

  returnDaysExceededStepGoal(userID) {
  let stepGoal = this.userData.find(user => user.id === userID).dailyStepGoal
  let correctUser = this.activityData.find(user => user.userID === userID).activityData
  return correctUser.filter(day => day.numSteps > stepGoal).map(day => day.date);
}
  
  returnAllTimeClimbingRecord(userID) {
    let userClimbingRecord = this.activityData[userID-1].activityData.map(el => el.flightsOfStairs).sort((a, b) => a-b).pop();
    return userClimbingRecord;
  }

  returnAWeekStepCount(userID, date) {
    let dateIndex = this.activityData[userID-1].activityData.findIndex(day => (JSON.stringify(day.date)) === JSON.stringify(date));
    let dateBack = dateIndex - 6
    return this.activityData[userID-1].activityData.slice(dateBack, (dateIndex+1)).map(day => day.numSteps) 
  }

  returnAWeekFlightOfStairs(userID, date) {
    let dateIndex = this.activityData[userID-1].activityData.findIndex(day => (JSON.stringify(day.date)) === JSON.stringify(date));
    let dateBack = dateIndex - 6
    return this.activityData[userID-1].activityData.slice(dateBack, (dateIndex+1)).map(day => day.flightsOfStairs) 
  }

  returnAWeekMinutesActive(userID, date) {
    let dateIndex = this.activityData[userID-1].activityData.findIndex(day => (JSON.stringify(day.date)) === JSON.stringify(date));
    let dateBack = dateIndex - 6
    return this.activityData[userID-1].activityData.slice(dateBack, (dateIndex+1)).map(day => day.minutesActive) 
  }

  returnAWeekMilesWalked(userID, date) {
    let userStrideLength = this.userData.find(el => el.id === userID).strideLength;
    let weeklySteps = this.returnAWeekStepCount(userID, date);
   return weeklySteps.map(steps => Math.floor(steps * userStrideLength / 5280))
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}