'use strict';

// Selecting all HTML elements
const milliSecods = document.querySelector('.milliSecods');
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

// initializing global variable
let pauseMilliSeconds;

// reseting values to use the code
let milliSecondsValue = '00';
let secondsValue = '00';
let minutesValue = '00';

// Timer function
function startTimer() {
  milliSecondsValue++;
  if (milliSecondsValue < 10) {
    milliSecondsValue = 0 + milliSecondsValue.toString();
    milliSecods.textContent = milliSecondsValue;
  }
  // If milliseconds reached 100
  if (milliSecondsValue === 100) {
    milliSecondsValue = '00';
    // increase seconds
    secondsValue++;

    // if seconds has 1 digit then add a leading zero
    if (secondsValue < 10) {
      secondsValue = 0 + secondsValue.toString();
      seconds.textContent = secondsValue;
    } else {
      seconds.textContent = secondsValue;

      // if seconds reached 60 seconds Then add 1 to the minutes
      if (secondsValue === 60) {
        secondsValue = '00';
        seconds.textContent = secondsValue;

        minutesValue++;
        // if minutes has 1 digit then add a leading zero
        if (minutesValue < 10) {
          minutesValue = 0 + minutesValue.toString();
          minutes.textContent = minutesValue;
        } else {
          minutes.textContent = minutesValue;
        }
      }
    }
  } else {
    milliSecods.textContent = milliSecondsValue;
  }
}

// Events

// CLicking start button
startBtn.onclick = function () {
  pauseMilliSeconds = setInterval(startTimer, 10);
};

// CLicking pasue button
pauseBtn.onclick = () => clearInterval(pauseMilliSeconds);

// CLicking reset button
resetBtn.onclick = () => {
  clearInterval(pauseMilliSeconds);
  milliSecods.textContent = '00';
  seconds.textContent = '00';
  minutes.textContent = '00';

  milliSecondsValue = '00';
  secondsValue = '00';
  minutesValue = '00';
};
