let correctAnswer = 70;

function calc(numA, numB) {
  function double(num) {
    return num * 2;
  }
  function square(num) {
    return num * num;
  }
  function add(num1, num2) {
    return num1 + num2;
  }
  function multiply(num1, num2) {
    return num1 * num2;
  }
  numA = double(numA); // 4
  numA = square(numA); // 16
  numA = multiply(numA, numB); // 64
  numA = add(1, numA); // 65

  // Use the add function to calculate the final answer
  let answer = add(add(numA, numB), 1);//70
  if (correctAnswer === answer) {
    return (`Correct answer! You fixed all the bugs. Well done`);
  } else {
    return (`${answer} is incorrect! The code still has bugs`);
  }
}

/* DO NOT CHANGE THE CODE BELOW */
calc(2, 4)
module.exports= { calc}

