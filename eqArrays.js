const assertEqual = require('./assertEqual')

const eqArrays = function(arr1, arr2) {
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
  // console.log(arr1, arr2, bool);
  // console.log(bool);
  return bool;
};

// eqArrays(['1', '2', '4'], ['1', '2', 4]);
// eqArrays(['1', '2', '4'], ['1', '2', '4']);

module.exports = {
  eqArrays: eqArrays,
  assertEqual: assertEqual
}
