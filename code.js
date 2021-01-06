let audioLength;
let audio;
let startTime = 0; //Remember times are in seconds
let endTime = 5; //Test time
let frameRate; //Note that commonly used framerates are 6, 12, 24, 60. Multiples of 6, usually.

function changeTimestampNext() { //Figure out how to go frame by frame
    if (frameRate > 0) {

    }
}

function changeTimestampPrior() {

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

function playAudio() { //Audio is never NULL
    //Testing to see if loaded audio will play
    //Might need the interval function to check if
    //audio has reached the end of it's playback portion
    //document.getElementById("errorMsg").textContent = "";
    audio.play(); //This is a function for audio files
    setTimeout(function() { audio.pause(); }, (endTime*1000)); //Has to be wrapped in an annonymous function
    //But I thought it could work without doing so...?
    //I guess the annonymous function prevents it from running immediately for some reason
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
        frameRate = 0;
        document.getElementById("errorMsg").textContent = "Number not inputted";
        //console.log(frameRate);
    }
}
