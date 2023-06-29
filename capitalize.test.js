const capitalize = require("./capitalize");

test("changes ryan to Ryan", () => {
  expect(capitalize("ryan")).toBe("Ryan");
});

test("capitalize the first letter only of a sentence", () => {
  expect(capitalize("tHe qUiCk bRoWn FoX did something.")).toBe(
    "The quick brown fox did something."
  );
});
