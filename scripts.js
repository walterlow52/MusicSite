let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let seek_slider = document.querySelector('.seek_slider');
let current_time = document.querySelector('.current-time');
let icon = document.querySelector('.fa-random');
let current_track = document.createElement('audio');

let shuffle = document.querySelector('.toggle');
let previous_button = document.querySelector('.prev-track');
let playpause_button = document.querySelector('.playpause-track');
let next_button = document.querySelector('.next-track');

let index = 0;
let playing = false;
let random = false;
let updateTime;
let data;

fetch('./db.json')
  .then((res) => res.json())
  .then((fetchedData) => {
    data = fetchedData;
    loadTrack(data, index);
  })

function loadTrack(data, index) {
  clearInterval(updateTime);
  reset();

        track_art.style.backgroundImage = "url(" + data[index].img + ")";
        track_name.textContent = data[index].name;
        track_artist.textContent = data[index].artist;    
        now_playing.textContent = "Bronco's Ultimate Playlist " + (index + 1) + " / " + data.length; 

        current_track.src = data[index].music;
        current_track.load();
  
        updateTime = setInterval(setUpdate, 1000);
        current_track.addEventListener('ended', nextTrack);
}

function reset() {
  current_time.textContent = "00.00";
  seek_slider.value = 0;
}

function randomTrack() {
  random ? pauseRandom() : playRandom();
}

function playRandom() {
  random = true;
  shuffle.innerHTML = 'ON'
}

function pauseRandom() {
  random = false;
  shuffle.innerHTML = 'OFF'
}

function repeatTrack() {
  loadTrack(data, index);
  playTrack();
}

function pauseTrack() {
  current_track.pause();
  playing = false;
  track_art.classList.remove('rotate');
  playpause_button.innerHTML = '<i class = "fa fa-play-circle fa-5x"> </i>';
}

function playTrack() {
  current_track.play();
  playing = true;
  track_art.classList.add('rotate');
  playpause_button.innerHTML = '<i class = "fa fa-pause-circle fa-5x"> </i>';
}

function playpauseTrack() {
  playing ? pauseTrack() : playTrack();
}

function prevTrack() { 
  if (index > 0) {
    index -= 1; 
  }
  else {
    index = data.length - 1;
  }
  loadTrack(data, index);
  playTrack();
}

function nextTrack() {
  if (index < data.length - 1 && random === false) {
    index += 1; 
  }
  else if (index < data.length - 1 && random === true) {
    let random_index = Number.parseInt(Math.random() * data.length);
    index = random_index;
  }
  else {
    index = 0;
  }
  loadTrack(data, index);
  playTrack();
}

function seekTo() {
  let seekto = current_track.duration * (seek_slider.value / 100);
  current_track.currentTime = seekto;
}

function setUpdate() {
  let seekPosition = 0;
  if (!isNaN(current_track.duration)) {
    seekPosition = current_track.currentTime * (100 / current_track.duration);
    seek_slider.value = seekPosition;
    
    let currentMinutes = Math.floor(current_track.currentTime / 60);
    let currentSeconds = Math.floor(current_track.currentTime - currentMinutes * 60);
    
    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    
    current_time.textContent = currentMinutes + ":" + currentSeconds;
  }
}