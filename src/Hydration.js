class Hydration {
  constructor (hydrationData) {
    this.hydrationData = hydrationData;
  }

  returnDailyWaterIntake(userID, date) {
    return this.hydrationData[userID-1].hydrationData.filter(el => el.date === date).pop().numOunces;
  }

  // returnFluidOzPerDay(date) {

  // }

  // returnWeeklyDailyOz() {d

  // }

}

module.exports = Hydration;

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}