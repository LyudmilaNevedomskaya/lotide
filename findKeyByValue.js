const findKeyByValue = function(show, name) {

  for (let key in show) {
    if (show[key] === name) {
      return key;
    }

  } return undefined;
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};




console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));

module.exports = findKeyByValue;