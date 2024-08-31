let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;
let lapCount = 0;
let lapTimes = [];

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('stop').addEventListener('click', stopStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', lap);

function startStopwatch() {
    intervalId = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes === 60) {
            hours++;
            minutes = 0;
        }
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(intervalId);
}

function resetStopwatch() {
    clearInterval(intervalId);
    hours = 0;
    minutes = 0;
    seconds = 0;
    lapCount = 0;
    lapTimes = [];
    updateDisplay();
    updateLaps();
}

function lap() {
    lapCount++;
    lapTimes.push(getTime());
    updateLaps();
}

function updateDisplay() {
    document.getElementById('hours').innerText = padZero(hours);
    document.getElementById('minutes').innerText = padZero(minutes);
    document.getElementById('seconds').innerText = padZero(seconds);
}

function updateLaps() {
    const lapList = document.getElementById('lap-list');
    lapList.innerHTML = '';
    lapTimes.forEach((time, index) => {
        const li = document.createElement('li');
        li.textContent = `Lap ${index + 1}: ${time}`;
        lapList.appendChild(li);
    });
}

function getTime() {
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}