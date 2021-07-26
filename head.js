const assertEqual = require('./assertEqual');
const head = function(head) {
  return head[0];
};



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


module.exports = head;