const countLetters = function(sentence) {
  let newSent = sentence.split(' ').join('');

  let result = {};

  for (let letter of newSent) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  } console.log(result);
  

};

//countLetters('lighthouse in the house');
countLetters('hello');

module.exports = countLetters;