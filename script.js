var currentNumber = "";
var previousNumber = "";
var operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function appendOperator(op) {
  previousNumber = currentNumber;
  currentNumber += op;
  operator = op;
  document.getElementById("result").value = currentNumber;
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
  document.getElementById("result").value = currentNumber;
}
