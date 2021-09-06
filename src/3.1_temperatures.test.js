// This file has been created by the instructors of SkillUnion.
// DO NOT EDIT HERE

const convert = require('./3.1_temperature.js');

test("Temperature 1 - Boiling water in Farheneit", () => {
  expect(convert(100)[0]).toBe(212);
});

test("Temperature 2 - Boiling water in Kelvin", () => {
  expect(convert(100)[1]).toBe(373.15);
});

test("Temperature 3 - Boiling water in Farheneit", () => {
  expect(convert(0)[0]).toBe(32);
});

test("Temperature 4 - Boiling water in Kelvin", () => {
  expect(convert(0)[1]).toBe(273.15);
});