// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  let num = 0;

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let i in object1) {
      for (let k in object2) {
        if (i === k && object1[i] === object2[k]) {
          num++;
        }
      }
    }
  }
  if (num === Object.keys(object1).length) {
    return true;
  } else {
    return false;
  }
};
const ab = { a: ["1"], b: "2" };
const ba = { b: "2", a: ["1"] };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

