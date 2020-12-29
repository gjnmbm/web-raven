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
//This works, but is unable to get the duration of the clip
//Will probably an event listener
    audio = document.getElementById('fileSelect').files[0];
    document.getElementById('debug').textContent = `Duration of Audio: ${audio.duration} seconds`;
    audioLength = audio.duration;
}

function playAudio() { //Audio is being loaded at least, shown by message not appearing
    audio = document.getElementById('fileSelect').files[0];
    if (audio == null) {
        document.getElementById("errorMsg").textContent = "Couldn't load audio";
    }
    else {
        //Testing to see if loaded audio will play
        //audio.play(); Apperently this is not a function
        //document.getElementById("audioSource").src = audio; This doesn't work
    }
}