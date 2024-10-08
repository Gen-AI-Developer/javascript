// Control Flow and Conditional Statements
// conditional statements are
// if
// if-else
// if-else-if
// switch

// if (condition) {
//     // code to be executed if the condition is true

// if (condition) {
//     // code to be executed if the condition is true
// } else {
//     // code to be executed if the condition is false

// if (condition1) {
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// } else {
//     // code to be executed if all conditions are false

// let day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("It's the start of the week.");
//         break;
//     case "Friday":
//         console.log("It's the end of the week.");
//         break;
//     default:
//         console.log("It's a regular day.");
//         break;

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the end of the week.");
    break;
  default:
    console.log("It's a regular day.");
    break;
}
// ternary Operator
let age = 11;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

if (age < 18) {
  console.log(age + ": Age is Less then 18");
}

if (age > 18) {
  console.log(age + ": Age is Greater then 18");
} else {
  console.log(age + ": Age is Less then 18");
}

if (condition) {
} else {
}
