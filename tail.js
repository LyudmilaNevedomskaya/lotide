const tail = function(tail) {

  let result = tail.slice(1);
  //console.log(result);
  const tailResult = result.length;
  return tailResult;
};

// console.log(tail([5,6,7,8,9,15]));
// console.log(tail(['Hello', 'Lighthouse', 'Labs', ]));
// // console.log(tail([]));



module.exports = tail;