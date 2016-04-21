// setup the IIFE (Immediately Invoked Function Expression)

(function() {
      
      "use strict";
      
function rollDice(){
      
      var dieOne = document.getElementById("dieOne");
      var dieTwo = document.getElementById("dieTwo");
      var status = document.getElementById("status");
      
      // Roll dice number between 1 - 6
      var dice1 = Math.floor(Math.random() * 6 ) + 1;
      var dice2 = Math.floor(Math.random() * 6 ) + 1;
      
      // Total of both dice roll
      var total = dice1 + dice2;
      
      dieOne.innerHTML = dice1;
      dieTwo.innerHTML = dice2;
      status.innerHTML = "You rolled"+total+"!! Roll Again..";
      
      
}

})();