const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const sentence = "Lighthouse in the house";
console.log(assertEqual(countLetters(sentence)["L"], 1));
console.log(assertEqual(countLetters(sentence)["i"], 2));
console.log(assertEqual(countLetters(sentence)["g"], 1));
console.log(assertEqual(countLetters(sentence)["h"], 4));
console.log(assertEqual(countLetters(sentence)["t"], 2));
console.log(assertEqual(countLetters(sentence)["o"], 2));
console.log(assertEqual(countLetters(sentence)["u"], 2));
console.log(assertEqual(countLetters(sentence)["s"], 2));
console.log(assertEqual(countLetters(sentence)["e"], 3));
console.log(assertEqual(countLetters(sentence)["n"], 1));