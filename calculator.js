let temp = 0.0;
let currentOperator = null;

function showResult(value) {
  document.getElementById('result').value = value;
}

function clearResult() {
  showResult('0');
  temp = 0.0;
  currentOperator = null;
}

function appendToResult(value) {
  let resultText = document.getElementById('result').value;
  if (currentOperator != null && value === '.') {
    // when [operator]-> [.] clicked
    showResult('0.');
  } else if (resultText.includes('.') && value === '.') {
    // not allowing double floatin-point
  } else if (currentOperator != null) {
    // when [operator] -> [0-9] clicked
    showResult(value);
  } else if (resultText === '0') {
    // when [operator] clicked displaying 0
    showResult(value);
  } else {
    // when [0-9] clicked
    resultText += value;
    showResult(resultText);
  }
}

function calculateResult() {
  const currentTemp = parseFloat(temp);
  const currentResult = parseFloat(document.getElementById('result').value);

  if (currentOperator === '+') {
    temp = currentTemp + currentResult;
  } else if (currentOperator === '-') {
    temp = currentTemp - currentResult;
  } else if (currentOperator === '*') {
    temp = currentTemp * currentResult;
  } else if (currentOperator === '/') {
    temp = currentTemp / currentResult;
  } else if (currentOperator === null) {
    temp = document.getElementById('result').value;
  }

  const result = parseFloat(parseFloat(temp).toFixed(10));
  showResult(result);
  currentOperator = null;
}

function appendOperator(op) {
  calculateResult();
  currentOperator = op;
}
