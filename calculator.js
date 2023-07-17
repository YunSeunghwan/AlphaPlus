let temp = 0.0;
let currentOperator = null;
let operatorAppended = false;

function appendToResult(value) {
    resultText = document.getElementById('result').value
    if (false){}
    else if (operatorAppended && value === '.'){
      document.getElementById('result').value = '0.';  
      operatorAppended = false;
    }
    else if (resultText.includes('.') && value === '.'){
    } 
    else if (operatorAppended){
      document.getElementById('result').value = value;  
      operatorAppended = false;
    }
    else if (resultText == '0'){
      document.getElementById('result').value = value;
    }
    else {
      document.getElementById('result').value += value;
    }
}

function calculateResult() {
  if (currentOperator =='+'){
    temp = parseFloat(temp) + parseFloat(document.getElementById('result').value);
  }
  else if (currentOperator =='-'){
    temp = parseFloat(temp) - parseFloat(document.getElementById('result').value);
  }
  else if (currentOperator =='*'){
    temp = parseFloat(temp) * parseFloat(document.getElementById('result').value);
  }
  else if (currentOperator =='/'){
    temp = parseFloat(temp) / parseFloat(document.getElementById('result').value);
  }
  else if (currentOperator ==null){
    temp = document.getElementById('result').value;
  }
  else {
    alert("invalid Operator!!");
    return;
  }
  document.getElementById('result').value =parseFloat(parseFloat(temp).toFixed(10));

  currentOperator = null;
  operatorAppended = false;
}

function clearResult() {
    document.getElementById('result').value = '0';
    temp = 0.0
    currentOperator = null;
    operatorAppended = false;
}

function appendOperator(op){
  calculateResult()
  currentOperator = op;
  operatorAppended = true;
}