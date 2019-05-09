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

  // returnWeeklyDailyOz() {d

  // }

}

module.exports = Hydration;

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}