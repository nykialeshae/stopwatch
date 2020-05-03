
// A "Stop" button to pause/stop it.
// A "Reset" button to reset the time back to 0.
// The time display to show the number of seconds elapsed, rather than the actual time.



const secondsElement = document.getElementById('seconde-elapsed')
let seconds = 0

// A "Start" button to start the stopwatch running.
document.getElementById('start').onclick = function() {
    setInterval(function() {
        seconds++
        secondsElement.innerText = seconds
    }, 1000);
}