let play = document.querySelector('#play');
let recent_volume = document.querySelector('#volume');
let index_no = 0;
let Playing_song = false;
let turn_off = false;
let track = document.createElement('audio');
let All_song = [{ 
  path: "/audio/InochiNoTabetaka-Eve-6284791.mp3", 
}, ];

function load_track(index_no) { track.src = All_song[index_no].path;
  track.load(); } 
  load_track(index_no);

function mute_sound() { 
  turn_off = true;
  track.volume = 0;
  volume.value = 0;
  progressBar = document.querySelector ("progress");
  progressBar.value = 0;
  sliderValue = document.querySelector(".sliderValue");
  sliderValue.innerHTML = slider.value;
  icons_off = document.querySelector('#icons-on');
  icons_off.innerHTML = '<i class="fa fa-volume-down" aria-hidden="true"></i>';
}
function none_mute() {
  turn_off = false;
  track.volume = 1;
  volume.value = 1;
  progressBar = document.querySelector("progress");
  progressBar.value = 1;
  sliderValue = document.querySelector(".sliderValue");
  sliderValue.innerHTML = slider.value;
  icons_off = document.querySelector('#icons-on');
  icons_off.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
}
function sound_change() {
  track.volume = recent_volume.value / 100;
  icons = document.querySelector('#icons-on');
  sliderValue = document.querySelector('.sliderValue');
  if (value = 0, sliderValue = 0) {
    icons.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
  }
  else if (value =>1<60, sliderValue =>1<60) {
    icons.innerHTML = '<i class="fa fa-volume-down" aria-hidden="true"></i>';
  }
  else if (value =>60<100, sliderValue =>60<100) {
    icons.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    alert("testing");
  }
}
function justsound() {
  if (turn_off === false) {
    mute_sound();
  }
  else {
    none_mute();
  }
}


function justplay() { 
  if (Playing_song == false) { playsong(); } 
  else { pausesong(); 
  } }

function playsong() { 
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'; }
function pausesong() { 
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function volume_change() { 
  track.volume = recent_volume.value / 100; } 

document.addEventListener("keydown", e => { 
  if (e.key.toLowerCase() === "s") {
    justsound(); 
  } 
  else if (e.key.toLowerCase() === "p") { justplay(); } 
  else if (e.key.toLowerCase() === "h") {
    sound_change();
  }
});

slider = document.querySelector ("input");
slider.oninput = function() {
progressBar = document.querySelector ("progress"); 
progressBar.value = slider.value;
sliderValue = document.querySelector(".sliderValue");
sliderValue.innerHTML = slider.value;
}

const text = baffle(".data"); 
text.set({
  characters : '>▓▒ ░▓>▒▒ ██▓░▓ ▓█░ <▓>▓▓ ▓▒▒█ ▒█▓ █▓/█ ▓▒█▓',
  speed: 90
  });
text.start();
text.reveal(6000);

const text2 = baffle(".data2");
text2.set({
  characters : '>▓▒ ░▓>▒▒ ██▓░▓ ▓█░ <▓>▓▓ ▓▒▒█ ▒█▓ █▓/█ ▓▒█▓',
  speed: 90
  });
text2.start();
text2.reveal(9000, 20000);


