const calcs = require("./index.js");

test("The add function should return 7", () => {
  expect(calcs.add(2, 5)).toBe(7);
});

test("The multiply function should return 50", () => {
  expect(calcs.multiply(5, "*", 10)).toBe(50);
});

test("The hasPets function should return (henry ford really does have a nice pet)", () => {
  expect(calcs.hasPets(true, "henry", "ford")).toBe(
    "henry ford really does have a nice pet"
  );
});

test("The hasPets function should return (henry ford has no pets)", () => {
  expect(calcs.hasPets(false, "henry", "ford")).toBe("henry ford has no pets");
});

test("The balance of account1 and account2 should return 156", () => {
  expect(calcs.addsBalanceOfAccounts()).toBe(156);
});

test("The Calculator should return 4", () => {
  expect(calcs.calculator(2, "+", 2)).toBe(4);
});
test("The Calculator should return 2", () => {
  expect(calcs.calculator(5, "-", 3)).toBe(2);
});
test("The Calculator should return 12", () => {
  expect(calcs.calculator(3, "*", 4)).toBe(12);
});
test("The Calculator should return 5", () => {
  expect(calcs.calculator(15,"/",3)).toBe(5);
});