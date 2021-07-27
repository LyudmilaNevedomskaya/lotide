const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = {
  head,
  tail,
  middle,
  without,
  letterPositions,
  flatten: flatten,
  findKeyByValue,
  findKey,
  eqArrays,
  countOnly,
  countLetters,
  assertObjectsEqual,
  assertEqual,
  assertArraysEqual
};