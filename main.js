function add(a, b) {
  return a + b;
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

let num1 = 0;
let num2 = 0;
let operator = "";

// testing the functions in console
// const a = parseFloat(prompt("Enter a:"));
// const b = parseFloat(prompt("Enter b:"));

// console.log("a + b =", add(a, b));
// console.log("a - b =", subtract(a, b));
// console.log("a * b =", multiply(a, b));
// console.log("a / b =", divide(a, b));
