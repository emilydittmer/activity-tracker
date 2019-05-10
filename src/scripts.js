let dateCard = document.querySelector('.main-top-left--date-card')
let dateCardInput = document.querySelector('.main-top-left--date-card--input');
let hydrationNumberOfOz = document.querySelector('.main-bottom--hydration-card--number-of-ounces-key');
let sleepHoursOfSleep = document.querySelector('.main-bottom-center--sleep-card--hours-of-sleep-value');
let sleepSleepQuality = document.querySelector('.main-bottom-center--sleep-card--sleep-quality-value');
let activityNumOfSteps = document.querySelector('.main-bottom-right--activity-card--number-of-steps-value');
let activityMinutesActive = document.querySelector('.main-bottom-right--activity-card--minutes-active-value');
let activityFlightsOfStairs = document.querySelector('.main-bottom-right--activity-card--flights-of-stairs-value');

window.addEventListener('load', updateOnLoad)
let userRepository= new UserRepository(userData);
let user = new User(userData[grabUserIDIndex()]);

// let hydrationRepository = new HydrationRepository(hydrationData, UserRepository);
// let hydration = new Hydration(hydrationData);

function updateOnLoad() {
  grabUserIDs();
  selectUserID();
  grabUserIDIndex();
  updateUserName();
  updateStepCount();
  updateAverageStepCount();
  updateMostCommonState();
  updateCompareStepCount();
}

function grabUserIDs() {
  return userData.map(user => user.id);
}

function selectUserID() {
  let randomID = grabUserIDs();
  console.log('randomize',randomID)
  let userID = randomID.sort(() => .5 - Math.random()).shift();
  console.log('userID', userID)
  return userID;
}

function grabUserIDIndex() {
  let index = selectUserID();
  console.log('index', index-1)
  return index -1
}

function updateUserName() {
  let headerUserName = document.querySelector('.header--user-name');
  headerUserName.innerHTML = user.returnFirstName();
}

function updateStepCount() {
  let goalsStepCount = document.querySelector('.main-top-center--step-count-value');
  goalsStepCount.innerHTML = user.userData.dailyStepGoal;
}

function updateAverageStepCount() {
  let averageStepCount = document.querySelector('.main-top-right--common-trends-card--step-count-trend-value');
  averageStepCount.innerHTML = userRepository.returnAverageStepGoal();
}

function updateMostCommonState() {
  let mostCommonState = document.querySelector('.main-top-right--common-trends-card--most-common-state-value');
  mostCommonState.innerHTML = userRepository.returnMostFrequentState();
}

function updateCompareStepCount() {
  let stepCountComparison = document.querySelector('.main-top-center--goals-card--step-count-comparison-value');
  stepCountComparison.innerHTML = userRepository.compareStepCounts();
}