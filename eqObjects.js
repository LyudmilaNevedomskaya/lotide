// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqArrays = function(arr1, arr2) {
  let bool = true;
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      count++;
    }
  }
  if (count !== arr1.length) {
    bool = false;
  }
  return bool;
};


const eqObjects = function(object1, object2) {

  let num = 0;

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let i in object1) {
      for (let k in object2) {
        if (i === k && object1[i] === object2[k]) {
          num++;
        }
        if(Array.isArray(object1[i]) && Array.isArray(object2[k]) && eqArrays(object1[i], object2[k])) {
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
const ab = { ocean: "Pacific", a: "1", b: "2"};
const ba = { b: "2", a: "1", ocean: "Pacific"};
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3"};
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4]};
console.log(eqObjects(cd, cd2)); // => false

const bob = { hat: "Red", hair: "Black", kids: ["Susie", "Lisa"]};
const jim = { kids: ["Susie", "Lisa"], hat: "Red", hair: "Black"};
console.log(eqObjects(bob, jim));

/*const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false*/

