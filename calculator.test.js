const calculator = require("./calculator");

test("adds 1 + 1 to equal 2", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("subtract 3 from 7 to equal 4", () => {
  expect(calculator.sub(7, 3)).toBe(4);
});

test("multiply 3 and 4 to equal 12", () => {
  expect(calculator.mul(3, 4)).toBe(12);
});

test("divide 20 by 4 to equal 5", () => {
  expect(calculator.div(20, 4)).toBe(5);
});
