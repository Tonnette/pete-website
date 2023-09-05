const left = document.querySelector('.hidebtn')
const test = document.querySelector('.testbtn')
const right = document.querySelector('.menubtn')
// const container = document.querySelector('.container')
const filmContainer = document.querySelector('.filmContainer')
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
var menu = document.querySelector('.menu-items');
var textFade =  document.querySelector('.name');
var textFade2 =  document.querySelector('.name2');
var textFade3 =  document.querySelector('.name3');
var animateText = document.querySelector('.animationClass');
var summ = document.querySelector('.summ')
var mysumm = document.querySelector('.mysumm')
var oa = document.querySelector('.oa')
var wolf = document.querySelector('.name4')
const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

summ.addEventListener('mouseenter', () => summ.style.color = '#B30739')
summ.addEventListener('mouseleave', () => summ.style.color = 'white')
mysumm.addEventListener('mouseenter', () => mysumm.style.color = '#B30739')
mysumm.addEventListener('mouseleave', () => mysumm.style.color = 'white')
left.addEventListener('mouseenter', () => left.style.color = '#B30739')
left.addEventListener('mouseleave', () => left.style.color = 'white')




window.onload = function() {
  window.setTimeout(fadeup, 1000); //1 seconds
  window.setTimeout(fadeupContact, 1000); //1 seconds
}

function fadeupContact() {
  textFade3.style.opacity = '1';
}


function fadeup() {
  textFade.style.opacity = '1';
  textFade2.style.opacity = '1';
  animateText.style.opacity = '1';
  textFade3.style.opacity = '1';
  oa.style.opacity = '1';
}


function menuFunction() {
  menu.style.opacity = 1

  filmContainer.classList.add('hover-left')
  filmContainer.classList.remove('hover-right')


  if (window.innerWidth <= 600){
    animateText.style.opacity = '0';
  
   } 

  

  
  

}

function hideFunction() {
  
  filmContainer.classList.add('hover-right')
  filmContainer.classList.remove('hover-left')
  menu.style.opacity = '0'
  animateText.style.opacity = '1'

 
 
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

