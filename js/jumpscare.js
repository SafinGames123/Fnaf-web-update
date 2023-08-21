var timeLeft = 100;
var elem = document.getElementById('batery');

var timerId = setInterval(countdown, 2000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    window.location.href = './jumpscare.html'
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

var timerId2 = setInterval(hourdown, 4000);

function hourdown() {
  if (hoursLeft == 8) {
    clearTimeout(timerId2);
    window.location.href = './weiner.html'
  } 
  
  else if(hoursLeft != 8) {
    elem2.innerHTML = hoursLeft + 'am';
    hoursLeft++;
  }
}
