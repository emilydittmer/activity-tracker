class Hydration {
  constructor (hydrationData) {
    this.hydrationData = hydrationData;
  }

  returnAverageWaterIntake(userID) {
    let waterIntakeDaily = this.hydrationData[userID-1].hydrationData.map(oz => oz.numOunces);
    let totalWaterIntake = waterIntakeDaily.reduce((total, oz) => {
      return total += oz
    }, 0);
    return totalWaterIntake/waterIntakeDaily.length;
  }

  returnWaterIntakeByDate(userID, date) {
    return this.hydrationData[userID-1].hydrationData.filter(el => el.date === date).pop().numOunces;
  }

  returnAWeekWaterIntake(userID, date) {
    let dateIndex = this.hydrationData[userID-1].hydrationData.findIndex(day => day.date === date);
    let dateBack = dateIndex - 6
    return this.hydrationData[userID-1].hydrationData.slice(dateBack, (dateIndex+1)).map(day => day.numOunces) 
  }

}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}