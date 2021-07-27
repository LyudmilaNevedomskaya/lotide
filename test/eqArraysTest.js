const assert = require('chai').assert;
const eqArray = require('../eqArrays');

describe ('equal arrays test', () => {

  it ("returns true for ['1', '2', '4'] and ['1', '2', '4'] ", () => {
    assert.isTrue(eqArray(['1', '2', '4'], ['1', '2', '4']), true);
  });

  it ("returns false for ['1', '2', '4'] and ['1', '2', 4] ", () => {
    assert.isFalse(eqArray(['1', '2', '4'], ['1', '2', 4]), false);
  })


});

// // const eqArrays = require('../eqArrays');

// // const assertEqual = function(actual, expected) {
// //   if (actual === expected) {
// //     console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
// //   } else {
// //     console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
// //   }
// // };

// // assertEqual(eqArrays(['1', '2', '4'], ['1', '2', 4]), false);
// // assertEqual(eqArrays(['1', '2', '4'], ['1', '2', '4']), true);