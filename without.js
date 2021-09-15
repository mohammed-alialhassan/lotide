const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎😎 Assertion Passed: ${actual} === ${expected}`);
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

const assertArraysEqual = function (arr1, arr2) {
 if(eqArrays(arr1,arr2)) {
console.log(`😎😎😎 Assertion Passed: ${arr1} === ${arr2}`)
} else if (!eqArrays(arr1, arr2)) {
console.log(`😓😓😓 Assertion Failed: ${arr1} !== ${arr2}`)
} 
}

const without = function(source, itemToRemove) {
  let withoutArray = [];
  for (let index of source) {
    if (!itemToRemove.includes(index)) {
      withoutArray.push(index);
    }
  }
  return withoutArray;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

