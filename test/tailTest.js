const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 2);
  });

  it("returns 5 for [5,6,7,8,9,15]", () => {
    assert.strictEqual(tail([5,6,7,8,9,15]), 5);
  });

  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs']), 2);
  });

  it("returns 0 for []", () => {
    assert.strictEqual(tail([]), 0);
  });
});




// // const tail = require('../tail');

// // const assertEqual = function(actual, expected) {
// //   if (actual === expected) {
// //     console.log(`👍 👍 👍 Assertion Passed: ${actual} === ${expected}`);
// //   } else {
// //     console.log(`❌ ❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
// //   }
// // };

// // assertEqual(tail([5,6,7,8,9,15]), 5);
// // assertEqual(tail(['Hello', 'Lighthouse', 'Labs', ]), 2);
// // assertEqual(tail([]), 0);