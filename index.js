const timer = document.getElementById('timerDisplay');

let min, sec, ms = 0;
var running = false;

function startTimer() {
    ms = 0;
    sec = 0;
    min = 0;
  if (running == false) {
        running = true;
        timerCycle();
    }
};

function pauseTimer() {
  if (running) {
    running = false;
  }
};

function timerCycle() {
    if (running) {
    
    ms = parseInt(ms);
    sec = parseInt(sec);
    min = parseInt(min);

    ms += 10;

    if (ms == 1000) {
      sec += 1;
      ms = 0;
    }
      
    if (sec == 60) {
      min += 1;
      sec = 0;
    } 
      
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }

    timer.innerHTML = min + ':' + sec + ':' + ms;

    setTimeout("timerCycle()", 10);
  }
};

function resetTimer() {
    timer.innerHTML = '00:00:00';
    running = false;
    ms = 0;
    sec = 0;
    min = 0;
};
