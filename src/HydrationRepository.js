class HydrationRepository {
  constructor(dataFilepath, UserRepository) {
    this.dataFilepath = dataFilepath;
    this.UserRepository = UserRepository;
  }
}

if (typeof module != 'undefined') {
  module.exports = HydrationRepository;
}