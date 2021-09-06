test("Numbers 1", () => {
  expect(typeof 42).toBe(null);
});

test("Numbers 2", () => {
  expect(typeof 4.2).toBe(null);
});

test("String", () => {
  expect(typeof "Hello").toBe(null);
});

test("false", () => {
  expect(typeof false).toBe(null);
});

test("NaN", () => {
  expect(typeof NaN).toBe(null);
});

test("Expression", () => {
  expect(typeof(4 !== 2)).toBe(null);
});
