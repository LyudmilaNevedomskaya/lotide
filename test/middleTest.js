const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');






 
assertArraysEqual(middle([1, 3]), []);
assertArraysEqual(middle([2]), []);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// console.log(middle([2]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
