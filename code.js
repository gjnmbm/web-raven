let audioLength;
let audio;

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
    //audio = document.getElementById('audioSource');
    document.getElementById('debug').textContent = `Duration of Audio: ${audio.duration} seconds`;

}

function playAudio() { //Audio is being loaded at least, shown by message not appearing
    if (audio == null) {
        document.getElementById("errorMsg").textContent = "Couldn't load audio";
    }
    else {
        //Testing to see if loaded audio will play
        //Might need the interval function to check if
        //audio has reached the end of it's playback portion
        audio.play(); //This is a function for audio files
    }
}

function setAudioURL() { //This will load the audio and I'll be able to access it from the global
//variable
    let file = document.getElementById('fileSelect');
    audio = document.getElementById('audioSource');
    audio.src = URL.createObjectURL(file.files[0]);
}
