let milliSec = 0;
let seconds = 0;
let minutes = 0; //= seconds/60;
let hours = 0; //= minutes/60;

function changeTimestamp() {
    //I can use the input from textBox and audio length in order to change timestamp
    milliSec += 1;
    //Isn't there a simpler way to do this? A less lines way?
    //I will need to change how the timestamp changes later on and make sure that I don't start the timestamp at 0
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

//With this function I'm able to get information on the file provided by the user
//The info is printed to the console
//In this function I'll need to change the source for the audio
function getFileInfo() {
    const fileSelector = document.getElementById('fileSelect');
    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        console.log(fileList);
        //document.getElementById('audioSource').src = fileList[0].name;
  });
}

function getAudioDuration() { //This is to see if I'm able to get the duration of the given audio clip
//This only works if the audio is already loaded, not if the audio is given by the user
    var audio = document.getElementById('audioSource');
    document.getElementById('debug').textContent = `Duration of Audio: ${audio.duration} seconds`;
}

function playAudio() { //Not working
    
}