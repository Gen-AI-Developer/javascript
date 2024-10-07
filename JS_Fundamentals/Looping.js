// Loops
// for loop

// while loop
// do-while loop
let a = 0;
let b = 1;
let limit = 50;
while (a < limit) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}
