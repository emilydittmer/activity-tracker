let dateCard = document.querySelector('.main-top-left--date-card')
let dateCardInput = document.querySelector('.main-top-left--date-card--input');
let sleepHoursOfSleep = document.querySelector('.main-bottom-center--sleep-card--hours-of-sleep-value');
let sleepSleepQuality = document.querySelector('.main-bottom-center--sleep-card--sleep-quality-value');
let activityNumOfSteps = document.querySelector('.main-bottom-right--activity-card--number-of-steps-value');
let activityMinutesActive = document.querySelector('.main-bottom-right--activity-card--minutes-active-value');
let activityFlightsOfStairs = document.querySelector('.main-bottom-right--activity-card--flights-of-stairs-value');

window.addEventListener('load', updateOnLoad)
let userRepository= new UserRepository(userData);
let user = new User(userData[grabUserIDIndex()]);
let hydrationRepository = new HydrationRepository(hydrationData, UserRepository);
let hydration = new Hydration(hydrationData);

function updateOnLoad() {
  grabUserIDs();
  selectUserID();
  grabUserIDIndex();
  updateUserName();
  updateStepCount();
  updateAverageStepCount();
  updateMostCommonState();
  updateCompareStepCount();
  updateLastWeekHydrationIntake();
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
function updateUserHydrationIntake() {
  let hydrationNumberOfOz = document.querySelector('.main-bottom--hydration-card--number-of-ounces-key');
  hydrationNumberOfOz.innerHTML = hydration.returnWaterIntakeByDate
}

// let newDate =  new Date();
// let year = newDate.getFullYear();
// let month = newDate.getMonth() + 1;
// let day = newDate.getDate();



// if (month < 10) {
// date.innerHTML = day + "/" + "0" + month + "/" + year;
// } else {
// date.innerHTML = day + "/" + month + "/" + year;  
// }

date.innerHTML = "13/08/2019"

function getMonthtCurrentDateFromDataFiles() {
  let hydObj = hydration.hydrationData.find(el => el.date = date.innerHTML);
  return hydObj.date;
}

let hydrationNumberOfOz = document.querySelector('.main-bottom--hydration-card--number-of-ounces-value');
if (date.innerHTML = getMonthtCurrentDateFromDataFiles()){
hydrationNumberOfOz.innerHTML = hydration.returnWaterIntakeByDate(selectUserID(), date.innerHTML);
}

function updateLastWeekHydrationIntake() {
document.querySelector('.yesterday').innerHTML = hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[0];;
document.querySelector('.two-days-ago').innerHTML = hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[1];;
document.querySelector('.three-days-ago').innerHTML = hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[2];
document.querySelector('.four-days-ago').innerHTML = hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[3];
document.querySelector('.five-days-ago').innerHTML = hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[4];
document.querySelector('.six-days-ago').innerHTML = hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[5];
}
