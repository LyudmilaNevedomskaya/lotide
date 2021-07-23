const takeUntil = function(array, callback) {
  let result = array.filter(function(item) {
    return item.callback(x)

  })
}
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);