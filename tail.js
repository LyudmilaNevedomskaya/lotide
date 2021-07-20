const assertEqual = function(tail) {

  let result = tail.slice(1);
  console.log(result);
};

assertEqual([5,6,7,8,9,15]);
assertEqual(['Hello', 'Lighthouse', 'Labs', ]);
assertEqual([]);