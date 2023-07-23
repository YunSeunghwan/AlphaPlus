let temp = 0.0;
let currentOperator = null;
let operatorAppended = false;

function showResult(value) {
  document.getElementById('result').value = value;
}

function clearResult() {
  const btnText = document.getElementById('clearbutton').textContent;
  showResult('0');
  if (btnText === 'C') {
    document.getElementById('clearbutton').textContent = 'AC';
  } else {
    temp = 0.0;
    currentOperator = null;
  }
}

function appendToResult(value) {
  document.getElementById('clearbutton').textContent = 'C';
  if (operatorAppended) {
    if (value === '.') {
      // when [operator]-> [.] clicked
      showResult('0.');
    } else {
      showResult(value);
    }
    operatorAppended = false;
  } else {
    let resultText = document.getElementById('result').value;
    switch (value) {
      case '.':
        if (resultText.includes('.')) {
          // pass. (double floatin-point)
        } else {
          resultText += value;
          showResult(resultText);
        }
        break;
      case '0':
        if (resultText === '0') {
          // pass. (double zero)
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
      temp = document.getElementById('result').value;
      break;
  }
  const maxDigit = 10;
  const result = parseFloat(parseFloat(temp).toFixed(maxDigit));
  showResult(result);
  currentOperator = null;
}

function appendOperator(op) {
  if (!operatorAppended) {
    calculateResult();
    operatorAppended = true;
  }
  currentOperator = op;
}
