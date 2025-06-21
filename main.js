function add(a, b) {
  return +a + +b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0){
    console.log("Cannot divide by 0");
    return "ERROR";
  }  
  return a / b;
}

let num1 = '';
let num2 = '';
let operator = "";

// testing the functions in console
// const a = parseFloat(prompt("Enter a:"));
// const b = parseFloat(prompt("Enter b:"));

// console.log("a + b =", add(a, b));
// console.log("a - b =", subtract(a, b));
// console.log("a * b =", multiply(a, b));
// console.log("a / b =", divide(a, b));



//when a button is pressed the text of the button will be added to the content of 
// the input's text
const buttons = document.querySelectorAll(".calc.button.n");
const input = document.querySelector(".calc.input.current");

buttons.forEach(button => {
  button.addEventListener("click", () => {
   
    // if operator hasn’t been chosen yet, build num1
    if (operator === "") {
      num1 += button.textContent;
      input.textContent = num1;
    } 
    // once operator is set, build num2
    else {
      num2 += button.textContent;
      input.textContent = num2;
    }
  });
});

//every non number button
const plusBtn = document.querySelector(".calc.button.plus");
const minusBtn = document.querySelector(".calc.button.minus");
const multBtn = document.querySelector(".calc.button.mult");
const divideBtn = document.querySelector(".calc.button.taghsim");
const equalBtn = document.querySelector(".calc.button.equal");
const clearBtn = document.querySelector(".calc.button.clear");

//set operator to the pressed button
plusBtn.addEventListener("click", () => {
    input.textContent = ""; 
    operator = "+"; 
    console.log("Operator set to +");
});

minusBtn.addEventListener("click", () => {
    input.textContent = ""; 
    operator = "-";
    console.log("Operator set to -");
});

multBtn.addEventListener("click", () => {
    input.textContent = ""; 
    operator = "*";
    console.log("Operator set to *");
});

divideBtn.addEventListener("click", () => {
    input.textContent = ""; 
    operator = "/";
    console.log("Operator set to /");
});

//equal button logic
equalBtn.addEventListener("click", () => {

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            result = num1;
    }
    document.querySelector(".calc.input.current").textContent = "";
    document.querySelector(".calc.input.history").textContent = result;
    num1 = result;
    num2 = '';
    operator = "";
});

//clear button logic
clearBtn.addEventListener("click", () => {
    num1 = '';
    num2 = '';
    operator = "";
    document.querySelector(".calc.input.current").textContent = "";
    document.querySelector(".calc.input.history").textContent = "";
    console.log("Calculator cleared");
});



// showing history of display
const historyEl = document.querySelector('.calc.input.history');

const buttonsForHistory = document.querySelectorAll('.calc.button:not(.clear):not(.equal)');

buttonsForHistory.forEach(btn => {
  btn.addEventListener('click', () => {
    historyEl.textContent += btn.textContent;
  });
});


