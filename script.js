const left = document.querySelector('.petebtn')
const right = document.querySelector('.btn')
const container = document.querySelector('.container')
var video = document.getElementById("myVideo");

left.addEventListener('onclick', () => container.classList.add('hover-left'))
left.addEventListener('onclick', () => container.classList.remove('hover-left'))

right.addEventListener('onclick', () => container.classList.add('hover-right'))
right.addEventListener('onclick', () => container.classList.remove('hover-right'))


function menuFunction() {
  container.classList.add('hover-left')
  container.classList.remove('hover-right')
}

function peteFunction() {
  container.classList.add('hover-right')
  container.classList.remove('hover-left')
 
}

        
// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}