const assert = require('chai').assert;
const assertEqual = require('../assertEqual')

describe ('assertion equal or not', () => {

  it ('return false for "Lighthouse Labs" and "Bootcamp"', () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"), true)
  });

  it ('return true for 1 and 1', () => {
    assert.isTrue(assertEqual(1, 1), true)
  });

  it ('return true for "Mila" and "Mila"', () => {
    assert.isTrue(assertEqual('Mila', 'Mila'), true)
  });

});


// const assertEqual = require('../assertEqual');

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

