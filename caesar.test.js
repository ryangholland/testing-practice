const caesar = require("./caesar");

test("changes Hello to Ifmmp", () => {
  expect(caesar("Hello", 1)).toBe("Ifmmp");
});

test("wraps properly; changes Lizzy to Nkbba", () => {
  expect(caesar("Lizzy", 2)).toBe("Nkbba");
});
