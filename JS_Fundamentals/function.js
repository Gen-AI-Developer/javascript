// Types of Functions
// Named Function
function add(num1, num2) {
  return num1 + num2;
}
var sub = function (num1, num2) {
  return num1 - num2;
};
var mul = function (num1, num2) {
  return num1 * num2;
};
// Function Expression
var div = function (num1, num2) {
  return num1 / num2;
};
// Function Constructor
var mod = new Function("num1", "num2", "return num1 % num2");
// Recursive Function
function factorial(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
// Higher Order Function
function operation(num1, num2, func) {
  return func(num1, num2);
}
// Function Call
console.log("Addition: " + add(5, 3));
console.log("Subtraction: " + sub(5, 3));
console.log("Multiplication: " + mul(5, 3));
console.log("Division: " + div(5, 3));
console.log("Modulus: " + mod(5, 3));
console.log("Factorial: " + factorial(5));
console.log("Operation: " + operation(5, 3, add));
// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("IIFE");
})();
// Function Hoisting
var hoist = "Hoisting";
console.log("Hoisting: " + hoist);
// arrow Function
var arrow = (num1, num2) => num1 + num2;
console.log("Arrow Function: " + arrow(5, 3));
// Function Scope
function scope() {
  var scope = "Scope";
  console.log("Scope: " + scope);
}
// Anonymous Function
var anonymous = function () {
  console.log("Anonymous Function");
};
// Function Closure
function closure() {
  var closure = "Closure";
  return function () {
    console.log("Closure: " + closure);
  };
}
// Function Callback
function callback(func) {
  func();
}
// Function Promise
function promise() {
  return new Promise(function (resolve, reject) {
    resolve("Promise");
  });
}
// Function Async/Await
async function async() {
  return "Async/Await";
}
// Function Generator
function* generator() {
  yield "Generator";
}
// Function this
function thisFunc() {
  console.log("This: " + this);
}
// Function arguments
function argumentsFunc() {
  console.log("Arguments: " + arguments);
}
// Function call
thisFunc();
argumentsFunc(1, 2, 3);
// Function apply
thisFunc.apply(this, [1, 2, 3]);
