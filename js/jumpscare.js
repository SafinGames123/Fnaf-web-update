var timeLeft = 100;
var elem = document.getElementById('batery');

var timerId = setInterval(countdown, 4000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    window.location.href = '../jumpscare.html'
  } 
  
  else if(timeLeft != 0) {
    elem.innerHTML = timeLeft + '%';
    timeLeft--;
  }
  else if(timeLeft !=0 && isdorclosd == false){
    clearTimeout(timerId);
  }
}
var hoursLeft = 1;
var elem2 = document.getElementById('time');

var timerId2 = setInterval(hourdown, 3500);

function hourdown() {
  if (hoursLeft == 6) {
    clearTimeout(timerId2);
    window.location.href = '../weiner.html'
  } 
  
  else if(hoursLeft != 6) {
    elem2.innerHTML = hoursLeft + 'am';
    hoursLeft++;
  }
}