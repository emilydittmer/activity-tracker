let dateCard = document.querySelector('.main-top-left--date-card')
let dateCardInput = document.querySelector('.main-top-left--date-card--input');
let hydrationNumberOfOz = document.querySelector('.main-bottom--hydration-card--number-of-ounces-key');
let sleepHoursOfSleep = document.querySelector('.main-bottom-center--sleep-card--hours-of-sleep-value');
let sleepSleepQuality = document.querySelector('.main-bottom-center--sleep-card--sleep-quality-value');
let activityNumOfSteps = document.querySelector('.main-bottom-right--activity-card--number-of-steps-value');
let activityMinutesActive = document.querySelector('.main-bottom-right--activity-card--minutes-active-value');
let activityFlightsOfStairs = document.querySelector('.main-bottom-right--activity-card--flights-of-stairs-value');

window.addEventListener('load', updateOnLoad)
let user = new User(userData[13]);
let userRepository= new UserRepository(userData);

function updateOnLoad() {
  updateUserName();
  updateStepCount();
  updateAverageStepCount();
  updateMostCommonState();
  updateCompareStepCount();
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