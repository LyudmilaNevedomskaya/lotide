const assert = require('chai').assert;
const middle = require('../middle');

describe ('middle arrays test', () => {

  it ("return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })

  it ("return [] for [1, 3]", () => {
    assert.deepEqual(middle([1, 3]), [])
  })

  it ("return [] for [2]", () => {
    assert.deepEqual(middle([2]), [])
  })

  it ("return [4] for [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4])
  })

});

// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// assertArraysEqual(middle([1, 3]), []);
// assertArraysEqual(middle([2]), []);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// console.log(middle([2]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

