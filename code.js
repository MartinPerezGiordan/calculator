document.addEventListener('DOMContentLoaded', function () {
  let firstNum = '';
  let operator = '';
  let lastNum = '';
  const upperDisplay = document.querySelector('#upperDisplay');
  const display = document.querySelector('#lowerDisplay');


  addNumListeners();
  function addNumListeners() {
    const numButtons = document.querySelectorAll('.num-btn');
    numButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (operator === '') {
          if(decimal(button.textContent)){
              firstNum += button.textContent;
              display.innerHTML = firstNum;
          }
        } 
        else {
          if(decimal(button.textContent)){
              lastNum += button.textContent;
              display.innerHTML = firstNum + operator + lastNum;
          }
        }
      });
    });
  }

  function decimal(input){
    if(operator === ''){
      if(input==="." && firstNum.includes(".")){
        return false
      }
      else{
        return true
      }
    }
    else{
      if(input==="." && lastNum.includes(".")){
        return false
      }
      else{
        return true
      }
    }
  }



  addOpListeners();
  function addOpListeners() {
    const opButtons = document.querySelectorAll('.op-btn');
    opButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        if(firstNum!==''){
          if (operator === '') {
            display.innerHTML += button.textContent;
            operator = button.textContent;
          } else {
            display.innerHTML += button.textContent;
            operate(firstNum, operator, lastNum);
            operator = button.textContent;
          }
        }
      });
    });
  }

  function add(firstNum, lastNum) {
    const result = firstNum + lastNum;
    return result;
  }

  function substract(firstNum, lastNum) {
    const result = firstNum - lastNum;
    return result;
  }

  function multiply(firstNum, lastNum) {
    const result = firstNum * lastNum;
    return result;
  }

  function divide(firstNum, lastNum) {
    const result = firstNum / lastNum;
    return result;
  }

  function operate(num1, operator, num2) {
    if(num1===''||operator===''||num2===''){
      return
    }
    if(num2==0){
      display.innerHTML = "Can't divide by 0"
      return
    }
    let result = 0;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (operator === '+') {
      result = add(num1, num2);
    } else if (operator === '-') {
      result = substract(num1, num2);
    } else if (operator === '*') {
      result = multiply(num1, num2);
    } else if (operator === '/') {
      result = divide(num1, num2);
    }
    upperDisplay.innerHTML = firstNum + operator + lastNum
    firstNum = +result;
    lastNum = '';
    operator = '';
    display.innerHTML = result;
  }

  equal();
  function equal() {
    const equalBtn = document.querySelector('.equal-btn');
    equalBtn.addEventListener('click', function () {
      operate(firstNum, operator, lastNum);
    });
  }

  clear();
  function clear() {
    const clearBtn = document.querySelector('#btnClear');
    clearBtn.addEventListener('click', function () {
      firstNum = '';
      operator = '';
      lastNum = '';
      display.innerHTML = '';
      upperDisplay.innerHTML = '';
    });
  }



//undo button
  undo();
  function undo(){
      const undoBtn = document.querySelector('#btnDelete');
      undoBtn.addEventListener('click', function(){
        if(operator==""){
          firstNum = firstNum.slice(0, -1);
          display.innerHTML = firstNum
        }
        else if(lastNum==""){
          operator = operator.slice(0,-1);
          display.innerHTML = firstNum
        }
        else if(lastNum!==""){
          lastNum = lastNum.slice(0,-1);
          display.innerHTML = firstNum + operator + lastNum
        }
      });
  }


//Keyboard Listener part

  keyListener();
  function keyListener(){
    document.addEventListener('keydown', (event) => {
  const key = event.key;
      if(key==0||key==1||key==2||key==3||key==4||key==5||key==6||key==7||key==8||key==9||key=="."){
        if (operator === '') {
                if(decimal(key)){
                    firstNum += key;
                    display.innerHTML = firstNum;
                }
              } 
              else {
                if(decimal(key)){
                    lastNum += key;
                    display.innerHTML = firstNum + operator + lastNum;
                }
              }
      }
      if(key=="+"||key=="-"||key=="*"||key=="/"){
        if(firstNum!==''){
          if (operator === '') {
            display.innerHTML += key;
            operator = key;
          } else {
            display.innerHTML += key;
            operate(firstNum, operator, lastNum);
            operator = key;
          }
        }
      }
      if(key=="Enter"){
        operate(firstNum, operator, lastNum);
      }
       if(key=="Backspace"){
          if(operator==""){
              firstNum = firstNum.slice(0, -1);
              display.innerHTML = firstNum
            }
            else if(lastNum==""){
              operator = operator.slice(0,-1);
              display.innerHTML = firstNum
            }
            else if(lastNum!==""){
              lastNum = lastNum.slice(0,-1);
              display.innerHTML = firstNum + operator + lastNum
            }
      }

}, false);
  }

  });