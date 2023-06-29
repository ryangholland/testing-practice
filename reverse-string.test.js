const reverseString = require("./reverse-string");

test("reverse Ryan Holland", () => {
  expect(reverseString("Ryan Holland")).toBe("dnalloH nayR");
});

test("reverse 58008", () => {
  expect(reverseString("58008")).toBe("80085");
});
