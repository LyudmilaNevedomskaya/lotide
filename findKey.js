const findKey = function(object, callback) {
  let howManyStars = Object.keys(object);

  for (let key of howManyStars) {
    if (callback(object[key])) {
      return key;
    }
  } return undefined;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"
);

module.exports = findKey;