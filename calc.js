var operator = 0;
var firstNumber = 0;
var secondNumber = 0;
var output;
var memory = 0;
var dPoint = false;
var resHasDec = false;
var result = document.getElementById("result");
var rstring = document.getElementById("result");


function calculatorT(){
  if (document.getElementById("calcType").value=="standard"){
    document.getElementById("extra").style.visibility = "hidden";
  }
  if (document.getElementById("calcType").value=="scientific"){
    document.getElementById("extra").style.visibility = "visible";
  }
}

function inputNumber(num){
  document.getElementById("result").value += num;
  document.getElementById("rstring").value = change(parseFloat(document.getElementById("result").value));
}

function clean(){
  document.getElementById("result").value="";
  document.getElementById("rstring").value="";
  dPoint = false;
  resHasDec = false;
}

function inputOperator(op){
  if (document.getElementById("result").value != ""){
    firstNumber = parseFloat(document.getElementById("result").value);
    operator = op;
    clean();
  } else {
    alert("You haven't input your first number!");
  }
}

function equals(){
  if (document.getElementById("result").value != ""){
    secondNumber = parseFloat(document.getElementById("result").value);
    if (operator == 3 && secondNumber==0){
      alert("You can't divide by 0!");
    } else{
      calculate();
    }
  } else {
    alert("You haven't input your second number!");
    clean();
  }
}

function calculate(){
  if (operator==1){
    output = firstNumber + secondNumber;
  }
  if (operator==2){
    output = firstNumber - secondNumber;
  }
  if (operator==3){
    output = firstNumber / secondNumber;
  }
  if (operator==4){
    output = firstNumber * secondNumber;
  }
  document.getElementById("result").value = output.toFixed(2);
  document.getElementById("rstring").value = change(parseFloat(document.getElementById("result").value));
  firstNumber=0;
  secondNumber=0;
  operator=0;
}

function memoryFunc(mem){
  if (mem == 0){
    memory = 0;
  } else if (mem == 1){
    memory += parseFloat(document.getElementById("result").value);
    clean();
  } else if (mem == 2){
    memory -= parseFloat(document.getElementById("result").value);
    clean();
  } else if (mem == 3){
    document.getElementById("result").value = memory;
    document.getElementById("rstring").value = change(parseFloat(document.getElementById("result").value));
  }
}

function trigonometry(op){
  if (document.getElementById("result").value != ""){
    firstNumber = parseFloat(document.getElementById("result").value);
    firstNumber = firstNumber * Math.PI / 180;
    if (op==1){
      output = Math.sin(firstNumber);
    } else if (op==2){
      output = Math.cos(firstNumber);
    } else if (op==3){
      output = Math.cos(firstNumber);
    }
  } else {
    alert("You haven't input a number!");
  }
  document.getElementById("result").value = output;
  document.getElementById("rstring").value = change(parseFloat(document.getElementById("result").value));
}

function inputDPoint(){
  if(!dPoint){
    document.getElementById("result").value += '.';
    dPoint = true;
    resHasDec = true;
  } else {
    alert("You can't add another decimal point!");
  }
}

function checkKeys(){
  if (event.keyCode < 48 || event.keyCode > 57){
    event.preventDefault();
  }
}
