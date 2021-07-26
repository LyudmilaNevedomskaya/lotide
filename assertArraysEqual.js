const assert = require('./assertEqual');

const assertEqArrays = function(arr1, arr2) {
  let bool = true;
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count++;
    }
  }
  if (count !== arr1.length) {
    bool = false;
  }

  return bool;
  // if (bool) {
  //   console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  // } else {
  //   console.log(`⛔⛔⛔ Assertion Failed: ${arr1} !== ${arr2}`);
  // }
};

assert(assertEqArrays(['1', '2', '4'], ['1', '2', '45']), false);
assert(assertEqArrays(['1', '2', '4'], ['1', '2', '4']), true);


module.exporst = assertEqArrays;