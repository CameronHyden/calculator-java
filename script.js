// global variables
const buttons = document.querySelector(".calculator__buttons");
const screenText = document.querySelector("#screen-text");
const equalsButton = document.querySelector("#equals");

// stored calculator data
const calculator = {
  outputValue: "",
  firstSum: "",
  secondSum: "",
  operator: null,
};

// functions
const AddNumberToScreen = (event) => {
  screenText.innerHTML = calculator.firstSum;
};

// need to update so it only adds decimal once
const AddDecimalToScreen = (event) => {
  if (calculator.firstSum !== ".") {
    screenText.innerHTML = calculator.firstSum;
  }
};

// clears screen and resets firstSum and secondSum
const ClearScreen = (event) => {
  screenText.innerHTML = "";
  calculator.firstSum = "";
  calculator.secondSum = "";
};
// new variables to turn the first and second sum into floating point numbers
// switch case to check if any of the operators have been pressed, perform calculation if so.

// maybe loop this??
const calculate = (event) => {
  let calculation;
  const prev = parseFloat(calculator.firstSum);
  const current = parseFloat(calculator.secondSum);
  switch (calculator.operator) {
    case "+":
      calculation = current + prev;
      break;

    case "-":
      calculation = current - prev;
      break;

    case "x":
      calculation = current * prev;
      break;

    case "÷":
      calculation = current / prev;
      break;
      
      default:
      return
  }
  screenText.innerHTML = calculation;
  calculator.operator = null;
  calculator.secondSum = ""
};

const checkButton = (event) => {
  const value = event.target;

  if (!value.matches("button")) {
    return;
  }

  if (value.classList.contains("operator")) {
    const operator = event.target.innerText;
    calculator.operator = operator;
    calculator.secondSum = calculator.firstSum;
    calculator.firstSum = "";
    console.log(operator, calculator.firstSum, calculator.secondSum);
    return;
  }

  if (value.classList.contains("decimal")) {
    const decimal = event.target.innerText;
    calculator.firstSum += decimal;
    AddDecimalToScreen();
    return;
  }
  if (value.classList.contains("clear")) {
    ClearScreen();
    return;
  }
  console.log(value.innerText);
  const number = event.target.innerText;
  calculator.firstSum += number;
  AddNumberToScreen();
};

// logic
buttons.addEventListener("click", checkButton);
equalsButton.addEventListener("click", calculate);
