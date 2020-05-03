
// A "Stop" button to pause/stop it.
// A "Reset" button to reset the time back to 0.
// The time display to show the number of seconds elapsed, rather than the actual time.



const secondsElement = document.getElementById('seconde-elapsed')
let seconds = 0
let interval;

function displaySeconds() {
    secondsElement.innerText = seconds
}

// A "Start" button to start the stopwatch running.
const startButton = document.getElementById('start')
startButton.onclick = function() {
    interval = setInterval(function() {
        startButton.setAttribute('disabled', true)
        seconds++
        displaySeconds()
    }, 1000);
}

// A "Stop" button to pause/stop it.
document.getElementById('stop').onclick = function() {
    clearInterval(interval)
    startButton.removeAttribute('disabled', false)
}