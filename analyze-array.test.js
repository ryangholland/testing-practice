const analyzeArray = require("./analyze-array");

test("return an object with avg, min, max, lngth", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("return another object with avg, min, max, lngth", () => {
  expect(analyzeArray([10, 80, 30, 40, 20, 60])).toEqual({
    average: 40,
    min: 10,
    max: 80,
    length: 6,
  });
});

