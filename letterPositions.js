const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] === ' ') {
      continue;
    } else {
      results[sentence[i]] = [i];
    }
    
  }
  for (let key in results) {
    for (let i = 0; i < sentence.length; i++) {
      if (key === sentence[i] && results[key][0] !== i) {
        results[key].push(i);
      }
    }
  }

  for (let key in results) {
    results[key].sort((a,b) => a - b);
  }
  
  return results;
};

console.log(letterPositions('lighthouse in the house'));