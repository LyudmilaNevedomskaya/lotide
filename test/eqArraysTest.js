const eqArrays = require('../eqArrays');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(eqArrays(['1', '2', '4'], ['1', '2', 4]), false);
assertEqual(eqArrays(['1', '2', '4'], ['1', '2', '4']), true);