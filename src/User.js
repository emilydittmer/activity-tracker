//require userData ???


class User {
  constructor(userData) {
    this.userData = userData;
    
  } 

  returnFirstName() {
    return this.userData.name.split(' ').slice(0, -1).join(' ');
  };

}

module.exports = User;