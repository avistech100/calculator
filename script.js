let currentNumber = "";
let previousNumber = "";
let operator = "";
let fullExpression = ""; // Stores the complete calculation expression for display

function appendNumber(number) {
  currentNumber += number;
  updateDisplay();
}

function appendOperator(op) {
  // Handle potential calculation if previous operator and current number exist
  if (operator !== "" && currentNumber !== "") {
    calculate();
  }
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
  updateDisplay();
}

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  fullExpression = ""; // Clear the full expression on clear
  updateDisplay();
}

function appendDecimal() {
  if (!currentNumber.includes(".")) {
    currentNumber += ".";
  }
  updateDisplay();
}

function updateDisplay() {
  // Build the full expression string dynamically
  fullExpression = previousNumber + operator + currentNumber;
  document.getElementById("result").value = fullExpression;
}

function calculate() {
  let result = 0;
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
  }
  currentNumber = result.toString();
  operator = "";
  previousNumber = "";
  updateDisplay(); // Update display with final result
}
