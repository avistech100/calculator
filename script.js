var currentNumber = "";
var previousNumber = "";
var operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function appendOperator(op) {
  // Save the current number as the previous number
  previousNumber = currentNumber;
  // Reset the current number for the next input
  currentNumber = "";
  operator = op;
  document.getElementById("result").value = previousNumber + " " + operator; // Optionally display operator
}

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("result").value = "";
}

function appendDecimal() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
    document.getElementById("result").value = currentNumber;
  }
}

function calculate() {
  let result = 0;
  // Check if previousNumber and currentNumber are valid before calculating
  if (previousNumber === "" || currentNumber === "") {
    return; // If either is empty, exit the function
  }

  switch (operator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      return; // If no valid operator, exit the function
  }
  
  currentNumber = result.toString();
  operator = "";
  previousNumber = "";
  document.getElementById("result").value = currentNumber;
}
