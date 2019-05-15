window.addEventListener("load", updateOnLoad);

function generateUserIds() {
  let allUsers = userRepository.dataFilepath.map(el => el.id);
  let currentIndex = allUsers.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = allUsers[currentIndex];
    allUsers[currentIndex] = allUsers[randomIndex];
    allUsers[randomIndex] = temporaryValue;
  }
  let threeUsers = allUsers.slice(0, 3);
  return threeUsers;
}

let userRepository = new UserRepository(userData);
let hydrationRepository = new HydrationRepository(
  hydrationData,
  UserRepository
);
let hydration = new Hydration(hydrationData);
let sleep = new Sleep(sleepData);
let activityRepository = new ActivityRepository(activityData, userData);
let activity = new Activity(activityData, userData);
let newDate = new Date();

const randomID = generateUserIds()[0];
const randomID2 = generateUserIds()[1];
const randomID3 = generateUserIds()[2];

function updateOnLoad() {
  generateUserIds();
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
  compareThreeFriends();
  userIncrementDates(randomID);
  displayAverageStrideLength();
}

let user = new User(userData[randomID - 1]);

function updateUserName() {
  $(".aside--user-name").text(user.returnFirstName());
}

function updateStepCount() {
  $(".aside--step-count-value").text(user.userData.dailyStepGoal);
}

function updateAverageStepCount() {
  $(".aside--trends--step-count-goal-value").text(
    userRepository.returnAverageStepGoal()
  );
}

function updateMostCommonState() {
  $(".aside--trends--most-common-state-value").text(
    userRepository.returnMostFrequentState()
  );
}

function updateCompareStepCount() {
  $(".aside--step-count-comparison-value").text(
    userRepository.compareStepCounts()
  );
}
function updateUserHydrationIntake() {
  $(".main-top--today-stats--hydration-numOunces-value").text(
    hydration.returnWaterIntakeByDate
  );
}

let date = document.querySelector("#date");
date.innerHTML = [
  newDate.getDate(),
  "0" + (newDate.getMonth() + 1),
  newDate.getFullYear()
].join("/");

function getMonthCurrentDateFromDataFiles() {
  let hydObj = hydration.hydrationData.find(el => (el.date = date.innerHTML));
  return hydObj.date;
}

if ((date.innerHTML = getMonthCurrentDateFromDataFiles())) {
  $(".main-top--today-stats--hydration-numOunces-value").text(
    hydration.returnWaterIntakeByDate(randomID, date.innerHTML)
  );
  $(".main-top--today-stats--sleep-hours-value").text(
    sleep.returnTotalSleepHoursInSpecificDay(randomID, date.innerHTML)
  );
  $(".main-top--today-stats--sleep-quality-value").text(
    sleep.returnTotalSleepQualityInSpecificDay(randomID, date.innerHTML)
  );
}

function updateLastWeekHydrationIntake() {
  $(".yesterday").text(
    hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[5]
  );
  $(".two-days-ago").text(
    hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[4]
  );
  $(".three-days-ago").text(
    hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[3]
  );
  $(".four-days-ago").text(
    hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[2]
  );
  $(".five-days-ago").text(
    hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[1]
  );
  $(".six-days-ago").text(
    hydration.returnAWeekWaterIntake(randomID, date.innerHTML)[0]
  );
}

function updateLastWeekSleepCount() {
  $(".sleep-yesterday").text(
    sleep.returnAWeekSleepCount(randomID, date.innerHTML)[5]
  );
  $(".sleep-two-days-ago").text(
    sleep.returnAWeekSleepCount(randomID, date.innerHTML)[4]
  );
  $(".sleep-three-days-ago").text(
    sleep.returnAWeekSleepCount(randomID, date.innerHTML)[3]
  );
  $(".sleep-four-days-ago").text(
    sleep.returnAWeekSleepCount(randomID, date.innerHTML)[2]
  );
  $(".sleep-five-days-ago").text(
    sleep.returnAWeekSleepCount(randomID, date.innerHTML)[1]
  );
  $(".sleep-six-days-ago").text(
    sleep.returnAWeekSleepCount(randomID, date.innerHTML)[0]
  );
}

function updateLastWeekSleepQuality() {
  $(".sleepq-yesterday").text(
    sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[5]
  );
  $(".sleepq-two-days-ago").text(
    sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[4]
  );
  $(".sleepq-three-days-ago").text(
    sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[3]
  );
  $(".sleepq-four-days-ago").text(
    sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[2]
  );
  $(".sleepq-five-days-ago").text(
    sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[1]
  );
  $(".sleepq-six-days-ago").text(
    sleep.returnAWeekSleepQualityCount(randomID, date.innerHTML)[0]
  );
}

function updateSleepAverages() {
  $(".sleep-count-average").text(sleep.returnAverageSleep(randomID));
  $(".sleep-quality-average").text(sleep.returnAverageSleepQuality(randomID));
}

function updateActivityToday() {
  $(".main-top--today-stats--activity-flights-of-stairs-value").text(
    activity.returnUserFlightsOfStairsInADay(randomID, date.innerHTML)
  );
  $(".main-top--today-stats--activity-steps-value").text(
    activity.returnUserStepsInADay(randomID, date.innerHTML)
  );
  $(".main-top--today-stats--activity-minutes-active--value").text(
    activity.returnUserMinutesActiveInGivenDay(randomID, date.innerHTML)
  );
  $(".main-top--today-stats--activity-miles-walked--value").text(
    activity.userStepsToMilesInADay(randomID, date.innerHTML)
  );
}

function updateActivityWeek() {
  $(".main-bottom--activity-card--flights-of-stairs-week-value").text(
    activity.returnAWeekFlightOfStairs(randomID, date.innerHTML)
  );
  $(".main-bottom--activity-card--number-of-steps-week-value").text(
    activity.returnAWeekStepCount(randomID, date.innerHTML)
  );
  $(".main-bottom--activity-card--minutes-active-week-value").text(
    activity.returnAWeekMinutesActive(randomID, date.innerHTML)
  );
  $(".main-bottom--activity-card--miles-walked-week-value").text(
    activity.returnAWeekMilesWalked(randomID, date.innerHTML)
  );
  $(".main-center-weekly-stats--activity-all-week-steps-value").text(
    activity.returnAWeekTotalSteps(randomID, date.innerHTML)
  );
}

function returnComparisonOfUserStepsToOverAllAvg() {
  let overallStepAverage = activityRepository.returnAverageStepsInADayForAllUsers(
    date.innerHTML
  );
  let userDailySteps = activity.returnUserStepsInADay(randomID, date.innerHTML);
  return Math.floor((userDailySteps / overallStepAverage) * 100);
}

function returnComparisonOfUserFlightsOfStairsToOverAllAvg() {
  let overallStairsAverage = activityRepository.returnAverageStairsClimbedInADayForAllUsers(
    date.innerHTML
  );
  let userFlightOfStairs = activity.returnUserFlightsOfStairsInADay(
    randomID,
    date.innerHTML
  );
  return Math.floor((userFlightOfStairs / overallStairsAverage) * 100);
}

function returnComparisonOfUserMinActiveToOverAllAvg() {
  let overallMinAverage = activityRepository.returnAverageMinsActiveInADayForAllUsers(
    date.innerHTML
  );
  let userMinActive = activity.returnUserMinutesActiveInGivenDay(
    randomID,
    date.innerHTML
  );
  return Math.floor((userMinActive / overallMinAverage) * 100);
}

function updateRank() {
  $(".main-bottom--activity-card--flights-of-stairs-rank-value").text(
    returnComparisonOfUserFlightsOfStairsToOverAllAvg()
  );
  $(".main-bottom--activity-card--number-of-steps-rank-value").text(
    returnComparisonOfUserStepsToOverAllAvg()
  );
  $(".main-bottom--activity-card--minutes-active-rank-value").text(
    returnComparisonOfUserMinActiveToOverAllAvg()
  );
  $(".main-bottom--activity-card--miles-walked-rank-value").text(
    returnComparisonOfUserStepsToOverAllAvg()
  );
}

function generateSecondUser() {
  let user2 = new User(userData[randomID2 - 1]);
  let activity2 = new Activity(activityData, userData);
  let name2 = $(".right--friends-stats--name2-value").text(
    user2.returnFirstName()
  );
  let number2 = $(".right--friends-stats--number-of-steps2-value").text(
    activity2.returnAWeekTotalSteps(randomID2, date.innerHTML)
  );
}

function generateThirdUser() {
  let user3 = new User(userData[randomID3 - 1]);
  let activity3 = new Activity(activityData, userData);
  $(".right--friends-stats--name3-value").text(user3.returnFirstName());
  $(".right--friends-stats--number-of-steps3-value").text(
    activity3.returnAWeekTotalSteps(randomID3, date.innerHTML)
  );
}

function compareThreeFriends() {
  let mainUserTotalSteps = parseInt($(".main-center-weekly-stats--activity-all-week-steps-value").text());
  let friendUser2totalSteps = parseInt(
    $(".right--friends-stats--number-of-steps2-value").text()
  );
  let friendUser3totalSteps = parseInt(
    $(".right--friends-stats--number-of-steps3-value").text()
  );
  let mainUsername = $(".aside--user-name").text();
  let secondUserName = $(".right--friends-stats--name2-value").text();
  let thirdUserName = $(".right--friends-stats--name3-value").text();
  let friends = [
    { name: mainUsername, steps: mainUserTotalSteps },
    { name: secondUserName, steps: friendUser2totalSteps },
    { name: thirdUserName, steps: friendUser3totalSteps }
  ];
  let orderedSteps = friends.sort((a, b) => a.steps - b.steps).pop();
  $(".right--friends-stats--best-name").text(orderedSteps.name);
  $(".right--friends-stats--best-value").text(orderedSteps.steps);
}

function userIncrementDates() {
  $(".aside--increase-step-count-value").text(
    activity.userIncrementDates(randomID)
  );
}

function displayAverageStrideLength() {
  $(".aside--trends--average-stride-length-value").text(
    userRepository.returnAverageStrideLength()
  );
}
