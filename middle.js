const middle = function(array) {
  let result = [];
  let middleArray;
  if (array.length <= 2) {
    return result;
  } else {
    if (array.length % 2 === 0) {
      middleArray = array.length / 2;
      result.push(array[middleArray - 1], array[middleArray]);
    } else {
      middleArray = Math.floor(array.length / 2);
      result.push(array[middleArray]);
    }
  } return result;
};

// console.log(middle([1, 3]));
// console.log(middle([2]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

module.exports = middle;