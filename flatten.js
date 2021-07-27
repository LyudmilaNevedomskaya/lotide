const flatten = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
        
      }
    } else {
      newArr.push(arr[i]);
    }
    
  }
  console.log(newArr);
  
};

flatten([1, 2, [3, 4], 5, [6]]);

module.exports = flatten;