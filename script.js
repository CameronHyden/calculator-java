const display = document.querySelector(".screen-text");
const buttons = document.querySelector(".calculator__buttons");

const calculator = {
    "outputValue": 0,
    "firstSum": null,
    "operator":null,
    "waitingForSecondSum": false,

};

// the value of my input field is now whatever the outPutValue is
const updateScreen = (value) => {
  display.value = calculator.outputValue;
}


const AddNumberToScreen = (event) =>{
    calculator.outputValue = display
    

}

const checkButton = (event) => {
    const value = event.target;

 if (!value.matches('button')) {
      return;
     }
 
  if (value.classList.contains('operator')) {
    console.log('operator', value.innerText);
    return;
      }

  if (value.classList.contains('decimal')) {
    console.log('decimal', value.innerText);
    return;
      }
  if (value.classList.contains('clear')) {
    console.log('clear', value.innerText);
    return;
      }
      console.log("number", value.innerText);
//       updateScreen(value.innerText);
//       AddNumberToScreen();
    }
    
buttons.addEventListener("click", checkButton);
