function timeLeft(){
  var countdown = 10;
  //Display time
  var timeout = 10000
  //Creates Countdown 
    for (var i = 10; i >= 0; i--){
  setTimeout(() => {
      //Changes the Display by getting the ID
      if (countdown >= 5){

      document.getElementById("countdownTimer").innerHTML = countdown;
      //Changes the number for the countdown
     countdown = countdown - 1;;}
     else if(countdown >= 1) {
         //Variable that changes
      document.getElementById("countdownTimer").innerHTML = "Warning, Less than 1/2 way to launch, time left = " + countdown;
      countdown = countdown - 1;

     }else{
         //blast off text
      document.getElementById("countdownTimer").innerHTML = "Blast Off!"
     }

  },timeout)
  //Time delay
  timeout = timeout - 1000;
  continue;
  }
}