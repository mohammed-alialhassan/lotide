const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
  const countString = sentence.split(" ").join("");
  let results = {};
  for (let letter of countString) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters