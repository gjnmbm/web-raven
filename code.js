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
    audio = document.getElementById('audioSource');
    
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

function setAudioURL() {
    let file = document.getElementById('fileSelect');
    audio = document.getElementById('audioSource');
    audio.src = URL.createObjectURL(file.files[0]);
}