document.addEventListener('DOMContentLoaded', function () {
  let firstNum = '';
  let operator = '';
  let lastNum = '';

  addNumListeners();
  function addNumListeners() {
    const display = document.querySelector('#display');
    const numButtons = document.querySelectorAll('.num-btn');
    numButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (operator === '') {
          firstNum += button.textContent;
          display.innerHTML = firstNum;
          console.log('first num is ' + firstNum);
        } else {
          lastNum += button.textContent;
          display.innerHTML = lastNum;
          console.log('last num is ' + lastNum);
        }
      });
    });
  }

  addOpListeners();
  function addOpListeners() {
    const opButtons = document.querySelectorAll('.op-btn');
    opButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        if (operator === '') {
          display.innerHTML = button.textContent;
          operator = button.textContent;
          console.log(operator);
        } else {
          display.innerHTML = operate(firstNum, operator, lastNum);
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
    firstNum = result;
    lastNum = '';
    operator = '';
    return result;
  }

  equal();
  function equal() {
    const equalBtn = document.querySelector('.equal-btn');
    equalBtn.addEventListener('click', function () {
      display.innerHTML = operate(firstNum, operator, lastNum);
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

    });
  }
});
