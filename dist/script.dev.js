"use strict";

// global variables
var numberButtons = document.querySelectorAll(".number__button");
var zeroButton = document.getElementsByClassName("zero__button btn");
var screenOutput = document.getElementById("screen-text");
var clearButton = document.getElementsByClassName("clear__button btn");
var plusButton = document.getElementsByClassName("plus__button btn");
var Buttons = document.getElementsByClassName(".calculator__button"); // functions

var checkButtonType = function checkButtonType(event) {
  var value = event.target.innerText;
  if (event.target.classList.contains('calculator__button')) console.log(value);
}; // if (Buttons.innerText === numberButtons.innerText){
//   console.log("we did it");
// }else{
//  (clearButton){
//   clearScreen();
// }else{
//   console.log("hello");
// }
// }
// targeting the inner text of each element that calls this function to change text of screen output
// const onNumberButtonClick = (event) => {
//   const numberValue = event.target.innerText;
//   screenOutput.innerText += (numberValue);  
// };
// const clearScreen = (event) => {
//   screenOutput.innerText = ("");
// };
// logic
// looping through each number button and applying function
// for (let index = 0; index < numberButtons.length; index++) {
//   numberButtons[index].addEventListener("click", onNumberButtonClick)};
// added same function to zero button as it was a different class
//   zeroButton[0].addEventListener("click", onNumberButtonClick);
// // when AC is clicked screenOutput text will be removed
//   clearButton[0].addEventListener("click", clearScreen);    


for (var i = 0; i < Buttons.length; i++) {
  Buttons[i].addEventListener("click", checkButtonType);
}