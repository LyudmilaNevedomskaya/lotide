const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
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

  
  if (bool) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${arr1} !== ${arr2}`);
  }
  return bool;
};

// assertEqual(assertArraysEqual(['1', '2', '4'], ['1', '2', '45']), false);
// assertEqual(assertArraysEqual(['1', '2', '4'], ['1', '2', '4']), true);


module.exports = assertArraysEqual;