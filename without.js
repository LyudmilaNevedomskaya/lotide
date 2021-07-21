const without = function(source, itemsToRemove) {
  let arrayWithoutItemsToRemove = [];

  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      arrayWithoutItemsToRemove.push(source[i]);
    }
  } console.log(arrayWithoutItemsToRemove);

};



without(["1", "2", "3"], [1, 2, "3"]);
without([1, 2, 3], [1]);