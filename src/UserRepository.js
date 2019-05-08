class UserRepository {
  constructor(dataFilepath) {
    this.dataFilepath = require(dataFilepath)
  }

  returnUserData(userID) {
    let user = this.dataFilepath.find((user) => {
      return user.id === userID;
    })
    return user;
  }

  returnAverageStepGoal() {
    let average = this.dataFilepath.reduce((total, user) => {
      return total += user.dailyStepGoal / this.dataFilepath.length;
    }, 0)
    return average;
  }

  returnAllUsersAddresses() {
    let allAddresses = this.dataFilepath.map((user) => {
      return user.address;
    });
    return allAddresses;
  }

  returnAllStates() {
    let justStates = this.returnAllUsersAddresses()
    return justStates.map((address) => {
      return address.split(' ').filter((word) => word.length === 2).join('');
    })
    return justStates
  }

  returnMostFrequentState() {
    let mostCommonState = this.returnAllStates();
    return mostCommonState.sort((a, b) => mostCommonState.filter(state => state === a).length - mostCommonState.filter(state => state === b).length).pop();
  }
}

if (typeof module === !undefined) {
  module.exports = UserRepository;
}