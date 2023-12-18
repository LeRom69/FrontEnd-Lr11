let timerInterval;
let totalTime = 0;
let pageVisible = true;

function startTimer() {
  timerInterval = setInterval(function () {
    totalTime++;
    updateTimerDisplay();
  }, 1000);
}

function updateTimerDisplay() {
  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = totalTime % 60;

  const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  document.getElementById('timer').innerText = formattedTime;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function handleVisibilityChange() {
  if (document.hidden) {
 
    clearInterval(timerInterval);
    pageVisible = false;
  } else {
 
    if (pageVisible === false) {
      startTimer();
      pageVisible = true;
    }
  }
}

document.addEventListener('visibilitychange', handleVisibilityChange);

startTimer();