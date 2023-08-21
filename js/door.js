var isdorclosd = false
function  opendoor() {
  if(isdorclosd == false){
    isdorclosd = true
    document.getElementById("door").style.background = 'url(./assets/door.png)'
  }
  else{
    isdorclosd = false
    document.getElementById("door").style.background = 'black'
  }
}
function door(){
  isdorclosd = false
}
var islighton = false
function light(){
  if(isdorclosd == true && islighton == true){
    document.getElementById("door").style.background = 'url(./assets/door.png)'
  }
  else if (isdorclosd== false && islighton == true){
    document.getElementById("door").style.background = 'url(./assets/Screenshot-2023-01-03.jpg)'
  }
  else if (isdorclosd = false && islighton == false){
    document.getElementById("door").style.background = 'black'
  }
  else if(isdorclosd == true && islighton == false){
    document.getElementById("door").style.background = 'url(./assets/door.png)'
  }
}
