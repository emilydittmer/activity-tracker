class User {
  constructor(userData) {
    this.userData = userData;
  } 

  returnFirstName() {
    let firstName = this.userData.name.split(' ');
    return firstName[0];
  };

}
if (typeof module !== 'undefined' && module.exports !== 'undefined') {
  module.exports = User;
}