const words = ["ground", "beef", "spaghetti", "meatballs", "yummy", "krabby", "patty"];

//Map function has two parameters with the SPECIFIC arguements of array and callbackFunction

//Return new array based on the results from callack function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
console.log(results1);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😓😓😓 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length >= arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else if (arr1.length < arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

assertEqual(eqArrays([1, 2, 3,], [1, 2, 3,]), true);

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else if (!eqArrays(arr1, arr2)) {
    console.log(`😓😓😓 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(results1, ["g", "b", "s", "m", "y", "k", "p"]);