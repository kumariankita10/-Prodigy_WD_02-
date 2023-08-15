
const timerDisplay = document.getElementById('timer');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('lapList');

let startTime;
let elapsedTime = 0;
let timerInterval;

function startStop() {
    if (startStopButton.textContent === 'Start') {
        startStopButton.textContent = 'Stop';
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
    } else {
        startStopButton.textContent = 'Start';
        clearInterval(timerInterval);
    }
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    timerDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(time) {
    const date = new Date(time);
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}


function resetTimer() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timerDisplay.textContent = '00:00:00';
    startStopButton.textContent = 'Start';
    lapList.innerHTML = '';
}

function recordLap() {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);
