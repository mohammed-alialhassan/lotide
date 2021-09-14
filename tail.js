const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const tail = function(array) {
  return array.slice[1];
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const example1 = [5];
assertEqual(example1.length, 1);
const example2 = [];
assertEqual(example2.length, 0);


