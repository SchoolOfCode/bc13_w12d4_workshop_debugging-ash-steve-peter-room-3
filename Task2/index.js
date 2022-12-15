debugger;
function double(num) {
  return num * 2;
}

function square(num1, num2) {
  num1 = String(num1);
  return num1 + num2;
}

function calc(numA, numB) {
  numA = double(numA);
  numA = square(numA, numB);
  return numA;
}

/* DO NOT CHANGE THE CODE BELOW */
let correctAnswer = 10;
let yourAnswer = calc(2, 6);

if (correctAnswer === yourAnswer) {
  console.log("You debugged this 🕺🏾");
} else {
  console.log(`The error is still there 😭`);
}
