let dateCard = document.querySelector('.main-top-left--date-card')
let dateCardInput = document.querySelector('.main-top-left--date-card--input');
let hydrationNumberOfOz = document.querySelector('.main-bottom--hydration-card--number-of-ounces-key');
let goalsStepCount = document.querySelector('.main-top-center--step-count-value');
let sleepHoursOfSleep = document.querySelector('.main-bottom-center--sleep-card--hours-of-sleep-value');
let sleepSleepQuality = document.querySelector('.main-bottom-center--sleep-card--sleep-quality-value');
let activityNumOfSteps = document.querySelector('.main-bottom-right--activity-card--number-of-steps-value');
let activityMinutesActive = document.querySelector('.main-bottom-right--activity-card--minutes-active-value');
let activityFlightsOfStairs = document.querySelector('.main-bottom-right--activity-card--flights-of-stairs-value');

window.addEventListener('load', updateOnLoad)

function updateOnLoad() {
  updateUserName();
}

function updateUserName() {
  let headerUserName = document.querySelector('.header--user-name');
  let user = new User(userData[0]);
  headerUserName.innerHTML = user.returnFirstName();
}