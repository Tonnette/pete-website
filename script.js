const left = document.querySelector('.hidebtn')
const test = document.querySelector('.testbtn')
const right = document.querySelector('.menubtn')
const container = document.querySelector('.container')
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var menu = document.querySelector('.menu-items');
var textFade =  document.querySelector('.name');
var textFade2 =  document.querySelector('.name2');
var animateText = document.querySelector('.animationClass');

window.onload = function() {
  window.setTimeout(fadeup, 1000); //1 seconds
}

function fadeup() {
  textFade.style.opacity = '1';
  textFade2.style.opacity = '1';
  animateText.style.opacity = '1';

}





function menuFunction() {
  container.classList.add('hover-left')
  container.classList.remove('hover-right')
}

function hideFunction() {
  container.classList.add('hover-right')
  container.classList.remove('hover-left')
}

        



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