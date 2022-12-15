const answer = require("./index.js");
test("The add function should return 7", () => {
  expect(answer.calc(2, 4)).toBe("Correct answer! You fixed all the bugs. Well done");
});
