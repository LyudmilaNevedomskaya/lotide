const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];

  for (let item of array) {

    results.push(callback(item));

    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
  }

  //console.log('array: ', array);
  //console.log(('callback: ', callback));

  
  return results;
};

const results1 = map(words, word => word[0]);



console.log(results1);




