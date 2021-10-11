
var fastestWpm = 0;

// Object that stores best WPM
class BestTime {
    constructor(wpm) {
        this.wpm = wpm;
    }
}

// Function that sets best WPM
function setSave() {
  let currentWpm = wpm();
  if (currentWpm < fastestWpm) {
    fastestWpm = fastestWpm;
  } else {
    fastestWpm = currentWpm;
  }
  let bestTime = new BestTime(fastestWpm);
  return bestTime.wpm;
}
