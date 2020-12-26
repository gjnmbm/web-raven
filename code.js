let milliSec = 0;
let seconds = 0;
let minutes = 0; //= seconds/60;
let hours = 0; //= minutes/60;

function changeTimestamp() {
    milliSec += 1;
    //Isn't there a simpler way to do this? A less lines way?
    //I will need to change how the timestamp changes later on
    if (milliSec == 60) {
        milliSec = 0;
        seconds += 1;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes += 1;
    }
    if (minutes == 60) {
        minutes = 0;
        hours += 1;
    }
    document.getElementById('timestamp').textContent = `${hours.toFixed(0)}:${minutes.toFixed(0)}:${seconds.toFixed(0)}:${milliSec.toFixed(0)}`;
}