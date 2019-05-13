let dateCard = document.querySelector('.main-top-left--date-card')
let dateCardInput = document.querySelector('.main-top-left--date-card--input');
// let sleepHoursOfSleep = document.querySelector('.main-bottom-center--sleep-card--hours-of-sleep-value');
// let sleepSleepQuality = document.querySelector('.main-bottom-center--sleep-card--sleep-quality-value');
let activityNumOfSteps = document.querySelector('.main-bottom-right--activity-card--number-of-steps-value');
let activityMinutesActive = document.querySelector('.main-bottom-right--activity-card--minutes-active-value');
let activityFlightsOfStairs = document.querySelector('.main-bottom-right--activity-card--flights-of-stairs-value');

window.addEventListener('load', updateOnLoad)
let userRepository= new UserRepository(userData);
let user = new User(userData[grabUserIDIndex()]);
let hydrationRepository = new HydrationRepository(hydrationData, UserRepository);
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData);
let activityRepository = new ActivityRepository(activityData,userData);
let activity = new Activity(activityData, userData);

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
  updateLastWeekSleepCount();
  updateLastWeekSleepQuality();
  updateSleepAverages();
  updateActivityToday();
  updateActivityWeek();
  updateRank();
}

function grabUserIDs() {
  return userData.map(user => user.id);
}

function selectUserID() {
  // let randomID = grabUserIDs();
  // console.log('randomize',randomID)
  // let userID = randomID.sort(() => .5 - Math.random()).shift();
  // console.log('userID', userID)
  let userID = 1;
  return userID;
}

function grabUserIDIndex() {
  let index = selectUserID();
  // console.log('index', index-1)
  return index -1
}

function updateUserName() {
  let headerUserName = document.querySelector('.header--user-name');
  headerUserName.innerHTML = user.returnFirstName();
}

function updateStepCount() {
  $('.main-top-center--step-count-value').text(user.userData.dailyStepGoal);
}

function updateAverageStepCount() {
  $('.main-top-right--common-trends-card--step-count-trend-value').text(userRepository.returnAverageStepGoal());
}

function updateMostCommonState() {
  $('.main-top-right--common-trends-card--most-common-state-value').text(userRepository.returnMostFrequentState());
}

function updateCompareStepCount() {
  $('.main-top-center--goals-card--step-count-comparison-value').text(userRepository.compareStepCounts());
}
function updateUserHydrationIntake() {
  $('.main-bottom--hydration-card--number-of-ounces-key').text(hydration.returnWaterIntakeByDate);
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

let hydrationNumberOfOzToday = document.querySelector('.main-bottom--hydration-card--number-of-ounces-value');
let hoursOfSleepToday = document.querySelector('.sleep-today');
let sleepQualityToday = document.querySelector('.sleepq-today')
if (date.innerHTML = getMonthtCurrentDateFromDataFiles()){
  hydrationNumberOfOzToday.innerHTML = hydration.returnWaterIntakeByDate(selectUserID(), date.innerHTML);
  hoursOfSleepToday.innerHTML = sleep.returnTotalSleepHoursInSpecificDay(selectUserID(), date.innerHTML);
  sleepQualityToday.innerHTML = sleep.returnTotalSleepQualityInSpecificDay(selectUserID(), date.innerHTML);
}

function updateLastWeekHydrationIntake() {
  $('.yesterday').text(hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[5]);
  $('.two-days-ago').text(hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[4]);
  $('.three-days-ago').text(hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[3]);
  $('.four-days-ago').text(hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[2]);
  $('.five-days-ago').text(hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[1]);
  $('.six-days-ago').text(hydration.returnAWeekWaterIntake(selectUserID(), date.innerHTML)[0]);
}

function updateLastWeekSleepCount() {
  $('.sleep-yesterday').text(sleep.returnAWeekSleepCount(selectUserID(), date.innerHTML)[5]);
  $('.sleep-two-days-ago').text(sleep.returnAWeekSleepCount(selectUserID(), date.innerHTML)[4]);
  $('.sleep-three-days-ago').text(sleep.returnAWeekSleepCount(selectUserID(), date.innerHTML)[3]);
  $('.sleep-four-days-ago').text(sleep.returnAWeekSleepCount(selectUserID(), date.innerHTML)[2]);
  $('.sleep-five-days-ago').text(sleep.returnAWeekSleepCount(selectUserID(), date.innerHTML)[1]);
  $('.sleep-six-days-ago').text(sleep.returnAWeekSleepCount(selectUserID(), date.innerHTML)[0]);
}


function updateLastWeekSleepQuality() {
  $('.sleepq-yesterday').text(sleep.returnAWeekSleepQualityCount(selectUserID(), date.innerHTML)[5]);
  $('.sleepq-two-days-ago').text(sleep.returnAWeekSleepQualityCount(selectUserID(), date.innerHTML)[4]);
  $('.sleepq-three-days-ago').text(sleep.returnAWeekSleepQualityCount(selectUserID(), date.innerHTML)[3]);
  $('.sleepq-four-days-ago').text(sleep.returnAWeekSleepQualityCount(selectUserID(), date.innerHTML)[2]);
  $('.sleepq-five-days-ago').text(sleep.returnAWeekSleepQualityCount(selectUserID(), date.innerHTML)[1]);
  $('.sleepq-six-days-ago').text(sleep.returnAWeekSleepQualityCount(selectUserID(), date.innerHTML)[0]);
}

function updateSleepAverages() {
  $('.sleep-count-average').text(sleep.returnAverageSleep(selectUserID()));
  $('.sleep-quality-average').text(sleep.returnAverageSleepQuality(selectUserID()));
}

function updateActivityToday() {
  $('.main-bottom-right--activity-card--flights-of-stairs-today').text(activity.returnUserFlightsOfStairsInADay(selectUserID(), date.innerHTML));
  $('.main-bottom-right--activity-card--number-of-steps-today-value').text(activity.returnUserStepsInADay(selectUserID(), date.innerHTML));
  $('.main-bottom-right--activity-card--minutes-active-today-value').text(activity.returnUserMinutesActiveInGivenDay(selectUserID(), date.innerHTML))
  $('.main-bottom-right--activity-card--miles-walked-today-value').text(activity.userStepsToMilesInADay(selectUserID(), date.innerHTML));
}

function updateActivityWeek() {
  $('.main-bottom-right--activity-card--flights-of-stairs-week-value').text(activity.returnAWeekFlightOfStairs(selectUserID(), date.innerHTML));
  $('.main-bottom-right--activity-card--number-of-steps-week-value').text(activity.returnAWeekStepCount(selectUserID(), date.innerHTML));
  $('.main-bottom-right--activity-card--minutes-active-week-value').text(activity.returnAWeekMinutesActive(selectUserID(), date.innerHTML));
  $('.main-bottom-right--activity-card--miles-walked-week-value').text(activity.returnAWeekMilesWalked(selectUserID(), date.innerHTML));
}

function returnComparisonOfUserStepsToOverAllAvg() {
  let overallStepAverage = activityRepository.returnAverageStepsInADayForAllUsers(date.innerHTML);
  let userDailySteps = activity.returnUserStepsInADay(selectUserID(), date.innerHTML);
  return Math.floor((userDailySteps/overallStepAverage)*100)
}

function returnComparisonOfUserFlightsOfStairsToOverAllAvg() {
  let overallStairsAverage = activityRepository.returnAverageStairsClimbedInADayForAllUsers(date.innerHTML);
  let userFlightOfStairs = activity.returnUserFlightsOfStairsInADay(selectUserID(), date.innerHTML);
  return Math.floor((userFlightOfStairs/overallStairsAverage)*100);
}

function returnComparisonOfUserMinActiveToOverAllAvg() {
  let overallMinAverage = activityRepository.returnAverageMinsActiveInADayForAllUsers(date.innerHTML);
  let userMinActive = activity.returnUserMinutesActiveInGivenDay(selectUserID(), date.innerHTML);
  return Math.floor((userMinActive/overallMinAverage)*100);
}

function updateRank() {
  $('.main-bottom-right--activity-card--flights-of-stairs-rank-value').text(returnComparisonOfUserFlightsOfStairsToOverAllAvg());
  $('.main-bottom-right--activity-card--number-of-steps-rank-value').text(returnComparisonOfUserStepsToOverAllAvg());
  $('.main-bottom-right--activity-card--minutes-active-rank-value').text(returnComparisonOfUserMinActiveToOverAllAvg());
  $('.main-bottom-right--activity-card--miles-walked-rank-value').text(returnComparisonOfUserStepsToOverAllAvg());
}

