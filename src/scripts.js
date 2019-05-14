window.addEventListener('load', updateOnLoad)
let randomID = Math.floor(Math.random() * userData.length) + 1;

let userRepository= new UserRepository(userData);
let hydrationRepository = new HydrationRepository(hydrationData, UserRepository);
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData);
let activityRepository = new ActivityRepository(activityData,userData);
let activity = new Activity(activityData, userData);
let newDate =  new Date();
let user = new User(userData[randomID -1]);

function updateOnLoad() {
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
  generateSecondUser();
  generateThirdUser();
  compareThreeFriends()
}

function updateUserName() {
  $('.header--user-name').text(user.returnFirstName());
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

let date = document.querySelector("#date")
date.innerHTML = ([newDate.getDate(), "0" + (newDate.getMonth()+1), newDate.getFullYear()].join("/"))

function getMonthCurrentDateFromDataFiles() {
  let hydObj = hydration.hydrationData.find(el => el.date = date.innerHTML);
  return hydObj.date;
}

if (date.innerHTML = getMonthCurrentDateFromDataFiles()){
  $('.main-bottom--hydration-card--number-of-ounces-value').text(hydration.returnWaterIntakeByDate(randomID, date.innerHTML));
  $('.sleep-today').text(sleep.returnTotalSleepHoursInSpecificDay(randomID, date.innerHTML));
  $('.sleepq-today').text(sleep.returnTotalSleepQualityInSpecificDay(randomID, date.innerHTML));
}

function updateLastWeekHydrationIntake() {
  $('.yesterday').text(hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[5]);
  $('.two-days-ago').text(hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[4]);
  $('.three-days-ago').text(hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[3]);
  $('.four-days-ago').text(hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[2]);
  $('.five-days-ago').text(hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[1]);
  $('.six-days-ago').text(hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[0]);
}

function updateLastWeekSleepCount() {
  $('.sleep-yesterday').text(sleep.returnAWeekSleepCount(randomID, date.innerHTML)[5]);
  $('.sleep-two-days-ago').text(sleep.returnAWeekSleepCount(randomID, date.innerHTML)[4]);
  $('.sleep-three-days-ago').text(sleep.returnAWeekSleepCount(randomID, date.innerHTML)[3]);
  $('.sleep-four-days-ago').text(sleep.returnAWeekSleepCount(randomID, date.innerHTML)[2]);
  $('.sleep-five-days-ago').text(sleep.returnAWeekSleepCount(randomID, date.innerHTML)[1]);
  $('.sleep-six-days-ago').text(sleep.returnAWeekSleepCount(randomID, date.innerHTML)[0]);
}


function updateLastWeekSleepQuality() {
  $('.sleepq-yesterday').text(sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[5]);
  $('.sleepq-two-days-ago').text(sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[4]);
  $('.sleepq-three-days-ago').text(sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[3]);
  $('.sleepq-four-days-ago').text(sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[2]);
  $('.sleepq-five-days-ago').text(sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[1]);
  $('.sleepq-six-days-ago').text(sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[0]);
}

function updateSleepAverages() {
  $('.sleep-count-average').text(sleep.returnAverageSleep(randomID));
  $('.sleep-quality-average').text(sleep.returnAverageSleepQuality(randomID));
}

function updateActivityToday() {
  $('.main-bottom-right--activity-card--flights-of-stairs-today').text(activity.returnUserFlightsOfStairsInADay(randomID, date.innerHTML));
  $('.main-bottom-right--activity-card--number-of-steps-today-value').text(activity.returnUserStepsInADay(randomID, date.innerHTML));
  $('.main-bottom-right--activity-card--minutes-active-today-value').text(activity.returnUserMinutesActiveInGivenDay(randomID, date.innerHTML))
  $('.main-bottom-right--activity-card--miles-walked-today-value').text(activity.userStepsToMilesInADay(randomID, date.innerHTML));
}

function updateActivityWeek() {
  $('.main-bottom-right--activity-card--flights-of-stairs-week-value').text(activity.returnAWeekFlightOfStairs(randomID, date.innerHTML));
  $('.main-bottom-right--activity-card--number-of-steps-week-value').text(activity.returnAWeekStepCount(randomID, date.innerHTML));
  $('.main-bottom-right--activity-card--minutes-active-week-value').text(activity.returnAWeekMinutesActive(randomID, date.innerHTML));
  $('.main-bottom-right--activity-card--miles-walked-week-value').text(activity.returnAWeekMilesWalked(randomID, date.innerHTML));
  $('.total-step-count-value').text(activity.returnAWeekTotalSteps(randomID, date.innerHTML));
}

function returnComparisonOfUserStepsToOverAllAvg() {
  let overallStepAverage = activityRepository.returnAverageStepsInADayForAllUsers(date.innerHTML);
  let userDailySteps = activity.returnUserStepsInADay(randomID, date.innerHTML);
  return Math.floor((userDailySteps/overallStepAverage)*100)
}

function returnComparisonOfUserFlightsOfStairsToOverAllAvg() {
  let overallStairsAverage = activityRepository.returnAverageStairsClimbedInADayForAllUsers(date.innerHTML);
  let userFlightOfStairs = activity.returnUserFlightsOfStairsInADay(randomID, date.innerHTML);
  return Math.floor((userFlightOfStairs/overallStairsAverage)*100);
}

function returnComparisonOfUserMinActiveToOverAllAvg() {
  let overallMinAverage = activityRepository.returnAverageMinsActiveInADayForAllUsers(date.innerHTML);
  let userMinActive = activity.returnUserMinutesActiveInGivenDay(randomID, date.innerHTML);
  return Math.floor((userMinActive/overallMinAverage)*100);
}

function updateRank() {
  $('.main-bottom-right--activity-card--flights-of-stairs-rank-value').text(returnComparisonOfUserFlightsOfStairsToOverAllAvg());
  $('.main-bottom-right--activity-card--number-of-steps-rank-value').text(returnComparisonOfUserStepsToOverAllAvg());
  $('.main-bottom-right--activity-card--minutes-active-rank-value').text(returnComparisonOfUserMinActiveToOverAllAvg());
  $('.main-bottom-right--activity-card--miles-walked-rank-value').text(returnComparisonOfUserStepsToOverAllAvg());
}

function generateSecondUser() {
  let randomID2 = Math.floor(Math.random() * userData.length) + 1;
  let user2 = new User(userData[randomID2 -1]);
  let activity2 = new Activity(activityData, userData);
  let name2 = $('.main-top-right--friends-card--name1-value').text(user2.returnFirstName());
  let number2 = $('.main-top-right--friends-card--number-of-steps1-value').text(activity2.returnAWeekTotalSteps(randomID2, date.innerHTML));
}

function generateThirdUser() {
  let randomID3 = Math.floor(Math.random() * userData.length) + 1;
  let user3 = new User(userData[randomID3 -1]);
  let activity3 = new Activity(activityData, userData);
  $('.main-top-right--friends-card--name2-value').text(user3.returnFirstName());
  $('.main-top-right--friends-card--number-of-steps2-value').text(activity3.returnAWeekTotalSteps(randomID3, date.innerHTML));
}

function compareThreeFriends() {
  let mainUserTotalSteps = parseInt($('.total-step-count-value').text());
  let friendUser2totalSteps = parseInt($('.main-top-right--friends-card--number-of-steps1-value').text());
  let friendUser3totalSteps = parseInt($('.main-top-right--friends-card--number-of-steps2-value').text());
  let mainUsername = $('.header--user-name').text();
  let secondUserName = $('.main-top-right--friends-card--name1-value').text();
  let thirdUserName = $('.main-top-right--friends-card--name2-value').text();
  let friends = [{name: mainUsername, steps: mainUserTotalSteps}, {name: secondUserName, steps: friendUser2totalSteps},{name: thirdUserName, steps: friendUser3totalSteps}];
  let orderedSteps = friends.sort((a, b) => a.steps - b.steps).pop();
  console.log(orderedSteps)
  $('.main-top-right--friends-card--best-name').text(orderedSteps.name);
  $('.main-top-right--friends-card--best-value').text(orderedSteps.steps);
}

