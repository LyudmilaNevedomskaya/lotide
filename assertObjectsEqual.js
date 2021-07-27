const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let num = 0;

  if (Object.keys(actual).length === Object.keys(expected).length) {
    for (let i in actual) {
      for (let k in expected) {
        if (i === k && actual[i] === expected[k]) {
          num++;
        }
      }
    }
  }
  if (num === Object.keys(actual).length) {
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc));

module.exports = assertObjectsEqual;