let audioLength;
let audio;
let startTime = 0; //Remember times are in seconds
let endTime = 0; 
let frameRate; //Note that commonly used framerates are 6, 12, 24, 60. Multiples of 6, usually.

function changeTimestampNext() { //Figure out how to go frame by frame
    //Not working. Is it because of global variableness? But I thought that the declaration only happens
    //Upon loading
    if (frameRate > 0) {
        startTime = endTime;
        endTime += 1/frameRate;
        audio.currentTime = startTime;
    }
}

function changeTimestampPrior() {
    if (frameRate > 0 && startTime > 0) {
        endTime = startTime;
        startTime -= 1/frameRate;
        audio.currentTime = startTime;
    }
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
    //This piece of code has become obsolete
    document.getElementById('debug').textContent = `Duration of Audio: ${audio.duration} seconds`;
}

function playAudio() { //This works
    audio.play(); //This is a function for audio files
    setTimeout(function() { 
        audio.pause();
        audio.currentTime = startTime; 
    }, (endTime*1000)); //Has to be wrapped in an annonymous function
    //I guess the annonymous function prevents it from running immediately for some reason
    //I also have to put all statements I want to run after timeout in the anonnymous function
    //Or else the function just ends without running the next part
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
    console.log(frameRate);
    document.getElementById("errorMsg").textContent = "";
    if (!Number.isFinite(frameRate)) { //If you type a number along with a string, parse int will get the number
        frameRate = 0;
        document.getElementById("errorMsg").textContent = "Number not inputted";
    }
    else if (frameRate > 0) {
        endTime = 1/frameRate; //This works, but I need to reset the current time after play
        //To allow for loops
    }
    else {
        document.getElementById("errorMsg").textContent = "Input a number greater than 0";
    }
}
