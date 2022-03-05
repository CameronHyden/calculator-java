"use strict";

var display = document.querySelector(".screen-text");
var calculator = {
  "outputValue": 0,
  "firstSum": null,
  "operator": null,
  "waitingForSecondSum": false
};

var updateScreen = function updateScreen(event) {
  display.value = calculator.outputValue;
};

updateScreen(); // for (let i = 0; i < Buttons.length; i++){
//     Buttons[i].addEventListener("click", updateScreen);
//     }