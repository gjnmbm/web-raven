let audioLength;
let audio;
let startTime;
let endTime;
let frameRate;

function changeTimestamp() {
    //Timestamp became obsolete, so this function will instead be used to change the audio playback time
    
}

//With this function I'm able to get information on the file provided by the user
//The info is printed to the console
function getFileInfo() {
    const fileSelector = document.getElementById('fileSelect');
    fileSelector.addEventListener('change', (event) => {
        const fileList = event.target.files;
        console.log(fileList);
  });
}

function getAudioDuration() { //This is to see if I'm able to get the duration of the given audio clip
//Will probably need an event listener
    if (typeof audio === 'undefined') {
        document.getElementById("errorMsg").textContent = "Couldn't load audio";
    }
    else {
        document.getElementById('debug').textContent = `Duration of Audio: ${audio.duration} seconds`;
    }
}

function playAudio() { //Audio is never NULL
    //Testing to see if loaded audio will play
    //Might need the interval function to check if
    //audio has reached the end of it's playback portion
    document.getElementById("errorMsg").textContent = "";
    audio.play(); //This is a function for audio files
    setTimeout(audio.stop(), end); //Don't know if this will work yet
}

function setAudioURL() { //This will load the audio and I'll be able to access it from the global
//variable
    let file = document.getElementById('fileSelect');
    document.getElementById("errorMsg").textContent = ""; //Only else statement would run
    //console.log(file.files.length == 0); Do this for error checking instead
    if (!file.files.length == 0) {
        audio = document.getElementById('audioSource');
        audio.src = URL.createObjectURL(file.files[0]);
        audioLength = audio.duration;
    }
    else {
        document.getElementById("errorMsg").textContent = "Couldn't load audio";
    }
}

function setFrameRate() {
    frameRate = parseInt(document.getElementById("frameRate").value, 10);
    document.getElementById("errorMsg").textContent = "";
    if (!Number.isFinite(frameRate)) {
        document.getElementById("errorMsg").textContent = "Couldn't load audio";
        //console.log(frameRate);
    }
}
