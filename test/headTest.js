const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns 5 for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 5 for ['5']", () => {
    assert.strictEqual(head(['5']), 5);
  });
});




// const head = require('../head');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


// assertEqual(head([5,6,7]), 5);
// assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
// assertEqual(head([]), undefined);