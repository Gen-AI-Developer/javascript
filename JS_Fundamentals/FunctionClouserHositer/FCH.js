// Here are examples of **Function Closure** and Function Hoisting in JavaScript,
// with explanations provided as comments inside the code:

// ### Example of Function Closure

// Function Closure Example
function outerFunction(outerVariable) {
  // This is the outer function

  return function innerFunction(innerVariable) {
    // This inner function has access to both outerVariable and innerVariable
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction("outside");
// Even though outerFunction is done executing, newFunction still has access to outerVariable
newFunction("inside");

// Output:
// Outer Variable: outside
// Inner Variable: inside

/* 
Explanation: 
A closure gives you access to the outer function's scope from an inner function, 
even after the outer function has completed execution.
*/

// ###Example of Function Hoisting

// Function Hoisting Example
hoistedFunction();
// You can call the function before it is defined due to hoisting

function hoistedFunction() {
  console.log("This function has been hoisted!");
}

/* 
Explanation:
In JavaScript, function declarations are hoisted to the top of their scope, 
meaning the function can be called before its definition in the code.
*/

// These examples showcase how closures allow access to outer function scopes and how function hoisting works in JavaScript.
