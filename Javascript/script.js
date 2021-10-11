const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const redoButton = document.querySelector("#redo");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const lastTime = document.querySelector("#last-time");
const lastWpm = document.querySelector("#wpm");
const bestWpm = document.querySelector("#best-wpm");

var timer = [0, 0, 0, 0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics) NMC
function leadingZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer NMC
function runTimer() {
  let currentTime =
    leadingZero(timer[0]) +
    ":" +
    leadingZero(timer[1]) +
    ":" +
    leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor(timer[3] / 100 / 60);
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}

// Match the text entered with the provided text on the page 
function spellCheck() {
  var originText = document.querySelector("#origin-text p").innerHTML;
  let textEntered = testArea.value;
  let originTextMatch = originText.substring(0, textEntered.length);

  if (textEntered == originText) {
    clearInterval(interval);
    theTimer.classList.remove("blinker");
    testWrapper.classList.remove("blinker");
    testWrapper.style.borderColor = "#1CA91C";
    setDisplayTwo();
  } else {
    if (textEntered == originTextMatch) {
      theTimer.classList.remove("blinker");
      testWrapper.classList.remove("blinker");
      testWrapper.style.borderColor = "#65CCf3";
    } else {
      testWrapper.style.borderColor = "#D31F27";
      testWrapper.classList.add("blinker");
      theTimer.classList.add("blinker");
    }
  }
}

// Start the timer
function start() {
  let textEnteredLength = testArea.value.length;
  if (textEnteredLength === 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
}

function setDisplayOne() {
  lastTime.innerHTML = "Last Time: " + theTimer.innerHTML;
}

function setDisplayTwo() {
  lastWpm.innerHTML = "Words Per Min: " + wpm();
  bestWpm.innerHTML = "Best WPM: " + setSave();
}

//Counts the words in text area
function wordCount() {
  var finalString = testArea.value;
  var finalWordCount = finalString.split(" ").length;
  return finalWordCount;
}

// Calculate words per minute
function wpm() {
  var finalTime = timer[0] * 60 + timer[1];
  var result = Math.floor((60 / finalTime) * wordCount());
  return result;
}

// Redo same puzzle
function redo() {
  setDisplayOne();
  clearInterval(interval);
  interval = null;
  timer = [0, 0, 0, 0];
  timerRunning = false;
  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  lastWpm.innerHTML = "Words Per Min: 0";
  testWrapper.style.borderColor = "grey";
}

// Next puzzle
function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0, 0, 0, 0];
  timerRunning = false;
  testArea.value = "";
  theTimer.innerHTML = "00:00:00";
  lastTime.innerHTML = "Last Time: 00:00:00";
  lastWpm.innerHTML = "Words Per Min: 0";
  testWrapper.style.borderColor = "grey";
  nextRandom();
}

// Event listeners for keyboard input and the reset/redo buttons
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
redoButton.addEventListener("click", redo, false);
resetButton.addEventListener("click", reset, false);
