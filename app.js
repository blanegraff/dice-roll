
"use strict";
(function () {
      // Declare Variables
      var face0 = new Image()
      face0.src = "Assets/images/d1.gif"
      var face1 = new Image()
      face1.src = "Assets/images/d2.gif"
      var face2 = new Image()
      face2.src = "Assets/images/d3.gif"
      var face3 = new Image()
      face3.src = "Assets/images/d4.gif"
      var face4 = new Image()
      face4.src = "Assets/images/d5.gif"
      var face5 = new Image()
      face5.src = "Assets/images/d6.gif"
      //  delcare roll button
      var rollButton = document.getElementById("rollButton");
      rollButton.pre

      // add event listener to button
      rollButton.addEventListener("click", function (event) {
            document.getElementById("roll")
            
            //create a random number between 0 and 5
            var randomdice = Math.round(Math.random() * 5)
            
            var randomdice2 = Math.round(Math.random() * 5)
            
            // create random dice images
            document.images["mydice"].src = eval("face" + randomdice + ".src")
            document.images["mydice2"].src = eval("face" + randomdice2 + ".src")
      });


})();