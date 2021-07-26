const tail = require('../tail');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(tail([5,6,7,8,9,15]), 5);
assertEqual(tail(['Hello', 'Lighthouse', 'Labs', ]), 2);
assertEqual(tail([]), 0);