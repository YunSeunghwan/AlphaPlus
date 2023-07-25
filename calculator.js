let temp = 0.0;
let currentOperator = null;
let isOperatorAppended = false;

function showResult(value) {
  document.getElementById('result').value = value;
}

function setClearButtonText(value) {
  document.getElementById('clearbutton').textContent = value;
}

function clearResult() {
  const btnText = document.getElementById('clearbutton').textContent;
  showResult('0');
  if (btnText === 'C') {
    setClearButtonText('AC');
  } else {
    temp = 0.0;
    currentOperator = null;
  }
}

function appendToResult(value) {
  let resultText = document.getElementById('result').value;
  setClearButtonText('C');
  if (isOperatorAppended) {
    if (value === '.') {
      // when [operator]-> [.] clicked
      showResult('0.');
    } else {
      showResult(value);
    }
    isOperatorAppended = false;
  } else {
    switch (value) {
      case '.':
        if (resultText.includes('.')) {
          // pass. (no-double-floating-point).
        } else {
          resultText += value;
          showResult(resultText);
        }
        break;
      case '0':
        if (resultText === '0') {
          // pass. (no-double-zero)
        } else {
          resultText += value;
          showResult(resultText);
        }
        break;
      default:
        if (resultText === '0') {
          showResult(value);
        } else {
          resultText += value;
          showResult(resultText);
        }
        break;
    }
  }
}

function calculateResult() {
  const currentTemp = parseFloat(temp);
  const currentResult = parseFloat(document.getElementById('result').value);
  const resultText = document.getElementById('result').value;
  switch (currentOperator) {
    case '+':
      temp = currentTemp + currentResult;
      break;
    case '-':
      temp = currentTemp - currentResult;
      break;
    case '*':
      temp = currentTemp * currentResult;
      break;
    case '/':
      temp = currentTemp / currentResult;
      break;
    default:
      temp = resultText;
      break;
  }
  const maxDigit = 10;
  const result = parseFloat(parseFloat(temp).toFixed(maxDigit));
  showResult(result);
  currentOperator = null;
}

function appendOperator(op) {
  if (!isOperatorAppended) {
    calculateResult();
    isOperatorAppended = true;
  }
  currentOperator = op;
}
