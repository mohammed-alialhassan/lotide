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


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { 
      if (results[sentence[i]]) { 
        results[sentence[i]].push(i); 
      } else {
        results[sentence[i]] = [i]; 
      }
    }
  } return results;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
